export function isBoardFull(board, empty) {
  return board.every((row) => row.every((col) => col !== empty));
}

// export function isBoardFull(board, empty) {
//   return board.every(isRowFull(empty));
// }

// function isRowFull(empty) {
//   return (row) => row.every(isColFull(empty));
// }

// function isColFull(empty) {
//   return (col) => col !== empty;
// }
