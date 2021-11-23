export function playerMove(board, row, col, currentPlayer) {
  return (board[row][col] = currentPlayer);
}
