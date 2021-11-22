//ok
// utilizar constantes exportadas em maiúsculo
// Agrupar constantes com quem as utiliza,
// neste caso que é utilizado por uma única função: isWinner
export const win = [
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

export const PLAYER1 = "X";
export const PLAYER2 = "O";
export const EMPTY = " ";

// utilizar constantes exportadas em maiúsculo
export const board = [
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
];

// export const board = [
//   ["O", "O", "X"],
//   ["X", "X", "O"],
//   ["O", "X", EMPTY],
// ];
