import { WINCASES } from "./winnerCheck.js";
import { EMPTY, PLAYER1, PLAYER2 } from "./utils/basicElements.js";
const players = {
  x: 0,
  o: 0,
  empty: 0,
};

export function isFutureDraw(board, currentPlayer) {
  let result = 0;
  let twoTrueDraw = 0;
  players.empty = 0;
  board.forEach((element) => {
    if (element === EMPTY) {
      players.empty++;
    }
  });

  //abrindo cada caso de vitória
  WINCASES.forEach((slot) => {
    players.x = 0;
    players.o = 0;
    //rodando um forEach de 3 posiçoes lendo possibilidade de vitória
    slot.forEach((index) => {
      //verificando o array
      if (board[index] === PLAYER1) {
        players.x++;
      } else if (board[index] === PLAYER2) {
        players.o++;
      }
      //condicoes certas de empate com 1 espaço vazio

      if (
        players.x === 2 &&
        players.o === 0 &&
        players.empty === 1 &&
        currentPlayer === PLAYER2
      ) {
        result = 1;
        return true;
      }
      if (
        players.o === 2 &&
        players.x === 0 &&
        players.empty === 1 &&
        currentPlayer === PLAYER1
      ) {
        result = 1;
        return true;
      }

      if (players.x === 1 && players.o === 1 && players.empty === 1) {
        result = 1;
        return true;
      }

      //condicoes certas de empate com 2 espaços vazios

      if (
        players.x === 2 &&
        players.o === 0 &&
        players.empty === 2 &&
        currentPlayer === PLAYER2
      ) {
        twoTrueDraw++;
        result = 1;
        return true;
      }
      if (
        players.o === 2 &&
        players.x === 0 &&
        players.empty === 2 &&
        currentPlayer === PLAYER1
      ) {
        twoTrueDraw++;
        result = 1;
        return true;
      }

      if (players.x === 1 && players.o === 1 && players.empty === 2) {
        twoTrueDraw++;
        result = 1;
        return true;
      }
    });
  });

  if (result === 1) {
    return true;
  }
  if (twoTrueDraw === 2) {
    return true;
  }

  return false;
}
