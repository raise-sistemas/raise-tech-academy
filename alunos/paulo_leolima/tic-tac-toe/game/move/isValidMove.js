import { EMPTY } from "../utils/basicElements.js";
import { playerMove } from "../move/playerMove.js";
import { yourTurn } from "../move/yourTurn.js";

export function isValidMove(board, row, col, currentPlayer) {
  // Verifica os inputs válidos.
  if ((row === 0 || row === 1 || row === 2) && (col === 0 || col === 1 || col === 2)) {
    // Verifica se o slot está vazio.
    if (board[row][col] === EMPTY) {
      playerMove(board, row, col, currentPlayer);
      return true;
    } else {
      yourTurn(currentPlayer, board);
      return false;
    }
  } else {
    yourTurn(currentPlayer, board);
    return false;
  }
}
