import { WINCASES } from "./winnerCheck.js";
import { EMPTY, PLAYER1, PLAYER2 } from "./utils/basicElements.js";
const players = {
  x: 0,
  o: 0,
  empty: 0,
};

const bestOption = {
  one: -1,
  two: -1,
  three: -1,
  four: -1,
};

export function iaPlayer(board) {
  let savingEmptyIndex;

  //abrindo cada caso de vitória
  WINCASES.forEach((slot) => {
    players.x = 0;
    players.o = 0;
    savingEmptyIndex = -1;
    //rodando um forEach de 3 posiçoes lendo possibilidade de vitória

    //verificando o array
    slot.forEach((index) => {
      if (board[index] === PLAYER1) {
        players.x++;
      } else if (board[index] === PLAYER2) {
        players.o++;
      } else {
        savingEmptyIndex = index;
      }
      //Melhor chance de vitória
      if (players.o === 2 && board[savingEmptyIndex] === EMPTY) {
        bestOption.one = savingEmptyIndex;
      }

      //Melhor chance de defender
      if (players.x === 2 && board[savingEmptyIndex] === EMPTY) {
        bestOption.two = savingEmptyIndex;
      }

      //Melhorando a chance de vitória
      if (index >= 1) {
        if (
          players.o === 1 &&
          board[index - 1] === EMPTY &&
          board[index] === EMPTY
        ) {
          bestOption.three = index;
        }
      }

      //Começando o jogo
      if (index >= 2) {
        if (
          board[index - 2] === EMPTY &&
          board[index - 1] === EMPTY &&
          board[index] === EMPTY
        ) {
          bestOption.four = index;
        }
      }

      //fim do slot.every
    });

    //fim do WINCASES.every
  });

  if (bestOption.one >= 0) return bestOption.one;
  if (bestOption.two >= 0) return bestOption.two;
  if (bestOption.three >= 0) return bestOption.three;
  if (bestOption.four >= 0) return bestOption.four;

  return true;
}
