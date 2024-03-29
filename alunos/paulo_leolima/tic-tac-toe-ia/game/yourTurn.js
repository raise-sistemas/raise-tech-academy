import { playerOneScore, playerTwoScore } from "./score/setScore.js";
import { isEmptySlot } from "./move/isEmptySlot.js";
import { drawScreen } from "./draw/drawScreen.js";
import { playerMove } from "./move/playerMove.js";
import { gameInput } from "./gameInput.js";

export function yourTurn(board, pos, currentPlayer) {
  // Verifica se o slot está vazio.
  if (isEmptySlot(board, pos)) {
    // Caso esteja vazio, a jogada é concluída.
    playerMove(board, pos, currentPlayer);
  } else {
    // Caso já esteja preenchido, a jogada é refeita.
    drawScreen(board, playerOneScore, playerTwoScore);
    gameInput(board, currentPlayer);
  }
}
