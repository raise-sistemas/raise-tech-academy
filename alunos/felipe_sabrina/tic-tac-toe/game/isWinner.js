//ok
import { win } from "../utils/general.js";
import { PLAYER1 } from "../utils/general.js";
import { PLAYER2 } from "../utils/general.js";

export let playerOneValue = 0;
export let playerTwoValue = 0;

// renomear a função para deixar claro o que ela realmente faz
// separar a verificação de quem ganhou da modificação do score
// Trocar 1 e 0 por true e false
export function isWinner(currentPlayer, board) {
  let result = false;
  win.forEach((element) => {
    if (
      board[element[0]][element[1]] === currentPlayer &&
      board[element[2]][element[3]] === currentPlayer &&
      board[element[4]][element[5]] === currentPlayer
    ) {
      if (currentPlayer === PLAYER1) {
        //console.log("entrei");
        // Retirar essa mutação para um local mais claro
        playerOneValue++;
      }
      if (currentPlayer === PLAYER2) {
        // Retirar essa mutação para um local mais claro
        playerTwoValue++;
      }
      console.log(`${currentPlayer} - Venceu o jogo!!!\n`);
      result = true;
      return 1;
    }
  });
  if (result) return 1;

  return 0;
}
