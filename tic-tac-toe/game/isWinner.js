import { PLAYER1 } from "../utils/general.js";
import { PLAYER2 } from "../utils/general.js";

const WIN = [
  // de lado
  [0, 0, 0, 1, 0, 2],
  [1, 0, 1, 1, 1, 2],
  [2, 0, 2, 1, 2, 2],
  //em pe
  [0, 0, 1, 0, 2, 0],
  [0, 1, 1, 1, 2, 1],
  [0, 2, 1, 2, 2, 2],
  //diagonais
  [0, 0, 1, 1, 2, 2],
  [0, 2, 1, 1, 2, 0],
];

export let playerOneValue = 0;
export let playerTwoValue = 0;

// renomear a função para deixar claro o que ela realmente faz
// separar a verificação de quem ganhou da modificação do score
// Trocar 1 e 0 por true e false - OK!
export function isWinner(currentPlayer, board) {
  let result = false;
  WIN.forEach((element) => {
    if (
      board[element[0]][element[1]] === currentPlayer &&
      board[element[2]][element[3]] === currentPlayer &&
      board[element[4]][element[5]] === currentPlayer
    ) {

/*
      if (currentPlayer === PLAYER1) {
        //console.log("entrei");
        // Retirar essa mutação para um local mais claro
        playerOneValue++;
      }
      if (currentPlayer === PLAYER2) {
        // Retirar essa mutação para um local mais claro
        playerTwoValue++;
      }
*/

      console.log(`${currentPlayer} - Venceu o jogo!!!\n`);
      result = true;
      return true;
    }
  });
  if (result) return true;

  return false;
}
