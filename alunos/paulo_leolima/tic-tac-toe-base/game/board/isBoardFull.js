export function isBoardFull(board, empty) {
  if (board.every((pos) => pos !== empty)) {
    return true;
  }
  return false;
}
