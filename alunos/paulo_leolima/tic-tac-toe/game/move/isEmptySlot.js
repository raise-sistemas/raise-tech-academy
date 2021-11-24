import { EMPTY } from "../utils/basicElements.js";

export function isEmptySlot(board, row, col) {
  if (board[row][col] === EMPTY) {
    return true;
  } else {
    return false;
  }
}