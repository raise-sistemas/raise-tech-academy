//ok
import {win} from "../utils/general.js";
import {PLAYER1} from "../utils/general.js";
import {PLAYER2} from "../utils/general.js";

export let playerOneValue = 0
export let playerTwoValue = 0

export function isWinner(currentPlayer, board){ 
  let result = false;
  win.forEach((element) => {
    if(board[element[0]][element[1]] === currentPlayer && 
      board[element[2]][element[3]] === currentPlayer && 
      board[element[4]][element[5]] === currentPlayer ){
        if(currentPlayer === PLAYER1){
          //console.log("entrei");
          playerOneValue++;
        }
        if(currentPlayer === PLAYER2){
          playerTwoValue++;
        }
        console.log(`${currentPlayer} - Venceu o jogo!!!\n`);
        result = true;
        return 1;
      }})
  if(result)return 1;

  return 0;
  }
  