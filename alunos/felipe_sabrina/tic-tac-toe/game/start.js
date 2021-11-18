import {choice} from "./choice.js";
import {drawBoard} from "./drawBoard.js";
import {isWinner} from "./isWinner.js";
import {isBoardFull} from "./isBoardFull.js";
import * as constants from "../utils/general.js";

export function start(){
    drawBoard(constants.board);
    let currentPlayer;
    while(1){
      currentPlayer = constants.PLAYER1;
      choice(currentPlayer, constants.board);
      drawBoard(constants.board);
      if(isWinner(currentPlayer, constants.board))break;
      if(isBoardFull(constants.board, constants.EMPTY))break;
    
      currentPlayer = constants.PLAYER2;
      choice(currentPlayer, constants.board);
      drawBoard(constants.board);
      if(isWinner(currentPlayer, constants.board))break;
      if(isBoardFull(constants.board, constants.EMPTY))break;
     
    }

}