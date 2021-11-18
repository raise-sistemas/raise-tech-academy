export function isBoardFull(board, empty) {
  console.log("O jogo deu velha");
  return board.every((row) => row.every((col) => col !== empty));
}
