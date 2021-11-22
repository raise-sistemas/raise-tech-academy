export function isBoardFull(board, empty) {
  if (board.every((row) => row.every((col) => col !== empty))) {
    console.log("Deu velha!");
    return true;
  }
  return false;
}
