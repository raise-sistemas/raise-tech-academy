export function isBoardFull(board, empty) {
  if (board.every((row) => row.every((col) => col !== empty))) {
    return true;
  }
  return false;
}