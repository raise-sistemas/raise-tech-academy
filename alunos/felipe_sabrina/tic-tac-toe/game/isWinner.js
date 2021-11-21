//ok
import {win} from "../utils/general.js";
export function isWinner(currentPlayer, board){  
      let result = false;
      win.forEach((element) => {
        if(board[element[0]][element[1]] === currentPlayer && 
          board[element[2]][element[3]] === currentPlayer && 
          board[element[4]][element[5]] === currentPlayer ){
            console.log(`${currentPlayer} venceu o jogo!!!`);
            result = true;
            return 1;
          }})
      if(result)return 1;

      return 0;
  }
  