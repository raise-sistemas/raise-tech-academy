const WIN = [
  // Linhas
  [0, 0, 0, 1, 0, 2],
  [1, 0, 1, 1, 1, 2],
  [2, 0, 2, 1, 2, 2],
  // Colunas
  [0, 0, 1, 0, 2, 0],
  [0, 1, 1, 1, 2, 1],
  [0, 2, 1, 2, 2, 2],
  // Diagonais
  [0, 0, 1, 1, 2, 2],
  [0, 2, 1, 1, 2, 0],
];

export function winGame(currentPlayer, board) {
  let result = false;
  WIN.forEach((element) => {
    if (
      board[element[0]][element[1]] === currentPlayer &&
      board[element[2]][element[3]] === currentPlayer &&
      board[element[4]][element[5]] === currentPlayer
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
