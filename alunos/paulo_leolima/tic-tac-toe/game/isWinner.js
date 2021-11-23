const WIN = [
  // de lado
  [0, 0, 0, 1, 0, 2],
  [1, 0, 1, 1, 1, 2],
  [2, 0, 2, 1, 2, 2],
  //em pe
  [0, 0, 1, 0, 2, 0],
  [0, 1, 1, 1, 2, 1],
  [0, 2, 1, 2, 2, 2],
  //diagonais
  [0, 0, 1, 1, 2, 2],
  [0, 2, 1, 1, 2, 0],
];

export function isWinner(currentPlayer, board) {
  let result = false;
  WIN.forEach((element) => {
    if (
      board[element[0]][element[1]] === currentPlayer &&
      board[element[2]][element[3]] === currentPlayer &&
      board[element[4]][element[5]] === currentPlayer
    ) {
      console.log(`${currentPlayer} - Venceu o jogo!\n`);
      result = true;
      return true;
    }
  });
  if (result) {
    return true;
  }
  return false;
}
