import { log } from "./log.js";

const EMPTY = " ";
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

function choice(currentPlayer, board){
  const input = prompt(`Jogador: ${currentPlayer}. Digite a linha e coluna:`);
  const row = +input.charAt(0);
  const col = +input.charAt(1);
  isVoid(board, row, col, currentPlayer);
}

function isVoid(board, row, col, currentPlayer){
  if (board[row][col] === EMPTY){
    board[row][col] = currentPlayer;
  }else{
    console.log("Essa posição já foi escolhida, escolha outra.\n");
    choice(currentPlayer, board);
    return false;
  }
}

function isWinner(currentPlayer, board){
  const win = [
  // de lado
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1] , [2, 2]],
    //em pe
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]], 
    [[0, 2], [1, 2], [2, 2]],
    //diagonais
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  for(let i = 0; i < win.length ; i++){
    if(board[win[i][0][0]][win[i][0][1]] === currentPlayer && 
      board[win[i][1][0]][win[i][1][1]] === currentPlayer && 
      board[win[i][2][0]][win[i][2][1]] === currentPlayer ){
      console.log(`${currentPlayer} venceu o jogo!!!`);
      return 1;
    }
    }
    return 0;
}

drawBoard(board);

let currentPlayer;
while(1){
  currentPlayer = PLAYER1;
  choice(currentPlayer, board);
  drawBoard(board);
  if(isWinner(currentPlayer, board))break;

  currentPlayer = PLAYER2;
  choice(currentPlayer, board);
  drawBoard(board);
  if(isWinner(currentPlayer, board))break;
 
}
