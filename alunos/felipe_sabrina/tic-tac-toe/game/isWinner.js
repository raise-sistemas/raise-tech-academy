//ok
import {win} from "../utils/general.js";
export function isWinner(currentPlayer, board){  
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
  