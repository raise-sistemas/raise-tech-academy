const WINCASES = [
  // Linhas
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Colunas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonais
  [0, 4, 8],
  [6, 4, 2],
];

export function winnerCheck(board, currentPlayer) {
  let result = false;
  WINCASES.forEach((slot) => {
    if (
      board[slot[0]] === currentPlayer &&
      board[slot[1]] === currentPlayer &&
      board[slot[2]] === currentPlayer
    ) {
      result = true;
      return true;
    }
  });
  if (result) {
    return true;
  }
  return false;
}
