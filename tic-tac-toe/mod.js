import { log } from "./log.js";

const EMPTY = NaN;
const PLAYER1 = "X";
const PLAYER2 = "O";
const board = [
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
];

function drawBoard(board) {
  console.clear();
  console.table(board);
}
// rodar dentro de um loop
let currentPlayer = PLAYER1;
board[1][1] = currentPlayer;
drawBoard(board);
currentPlayer = PLAYER2;
const input = prompt(`Jogador: ${currentPlayer}. Digite a linha e coluna:`);
const row = +input.charAt(0);
const col = +input.charAt(1);
board[row][col] = currentPlayer;
drawBoard(board);
