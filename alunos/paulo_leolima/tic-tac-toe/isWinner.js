// A function isWinner foi desenvolvida por Felipe e Sabrina.

export function isWinner(currentPlayer, board) {
  const win = [
    // de lado
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    //em pe
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    //diagonais
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (let i = 0; i < win.length; i++) {
    if (
      board[win[i][0][0]][win[i][0][1]] === currentPlayer &&
      board[win[i][1][0]][win[i][1][1]] === currentPlayer &&
      board[win[i][2][0]][win[i][2][1]] === currentPlayer
    ) {
      console.log(`${currentPlayer} venceu o jogo!!!`);
      return true;
    }
  }
  return false;
}