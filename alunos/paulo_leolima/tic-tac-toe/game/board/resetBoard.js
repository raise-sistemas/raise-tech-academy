import { EMPTY } from "../utils/basicElements.js";

export function resetBoard(board) {
  for (const i in board) {
    board[i] = EMPTY;
  }
}
