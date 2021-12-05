import { playerOneScore, playerTwoScore } from "./score/setScore.js";
import { isValidMove } from "./move/isValidMove.js";
import { yourTurn } from "./yourTurn.js";
import { drawScreen } from "./draw/drawScreen.js";

export function gameInput(board, currentPlayer) {
  const input = prompt(`\nJogador: ${currentPlayer}\nSua vez:`);
  //ajeitar input para não dar erro ao digitar "enter"
  const pos = +input.charAt(0);

  // Verifica se o input é válido.
  if (isValidMove(pos)) {
    // Caso seja válido, a jogada é concluída.
    yourTurn(board, pos, currentPlayer);
  } else {
    // Caso o input seja inválido, a jogada é refeita.
    drawScreen(board, playerOneScore, playerTwoScore);
    console.log("Posição inválida, tente novamente");
    gameInput(board, currentPlayer);
  }
}
