import { playerOneScore, playerTwoScore } from "./score/setScore.js";
import { isValidMove } from "./move/isValidMove.js";
import { yourTurn } from "./yourTurn.js";

export function gameInput(board, currentPlayer) {
  const input = prompt(`\nJogador: ${currentPlayer}\nSua vez:`);
  const pos = (+input.charAt(0)) - 1;

  // Verifica se o input é válido.
  if (isValidMove(pos)) {
    // Caso seja válido, a jogada é concluída.
    yourTurn(board, pos, currentPlayer);
  } else {
    // Caso o input seja inválido, a jogada é refeita.
    drawScreen(board, playerOneScore, playerTwoScore);
    gameInput(board, currentPlayer);
  }
}
