import { EMPTY } from "../utils/basicElements.js";

export function isEmptySlot(board, pos) {
  if (board[pos] === EMPTY) {
    return true;
  } else {
    return false;
  }
}
