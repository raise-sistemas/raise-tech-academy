const WIN = [
  // Linhas
  [6, 7, 8],
  [3, 4, 5],
  [0, 1, 2],
  // Colunas
  [6, 3, 0],
  [7, 4, 1],
  [8, 5, 2],
  // Diagonais
  [6, 4, 2],
  [0, 4, 8],
];

export function winnerCheck(currentPlayer, board) {
  let result = false;
  WIN.forEach((element) => {
    if (
      board[element[0]] === currentPlayer &&
      board[element[2]] === currentPlayer &&
      board[element[4]] === currentPlayer
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
