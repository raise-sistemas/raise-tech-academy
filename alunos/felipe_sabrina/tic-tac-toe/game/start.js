import {choice} from "./choice.js";
import {drawBoard} from "./drawBoard.js";
import {isWinner} from "./isWinner.js";
import {isBoardFull} from "./isBoardFull.js";
import {score} from "./score.js";
import {continueChoice} from "./continueChoice.js";
import * as constants from "../utils/general.js";
// import {restart} from "./restart.js";

export function start(){
    drawBoard(constants.board);
    let currentPlayer;
    currentPlayer = constants.PLAYER1;
    while(1){
      score();
      choice(currentPlayer, constants.board);
      drawBoard(constants.board);
      if(isWinner(currentPlayer, constants.board)){
        currentPlayer = constants.PLAYER1;
        if (!continueChoice(constants.board))break;
      }else{
        currentPlayer = constants.PLAYER2;
      }
      if(isBoardFull(constants.board, constants.EMPTY)){
        if (!continueChoice(constants.board))break;
      }

      score();
      choice(currentPlayer, constants.board);
      drawBoard(constants.board);
      if(isWinner(currentPlayer, constants.board)){
        currentPlayer = constants.PLAYER2;
        if (!continueChoice(constants.board))break;
      }else{
        currentPlayer = constants.PLAYER1;
      }
      if(isBoardFull(constants.board, constants.EMPTY)){
        if (!continueChoice(constants.board))break;
      }
     
    }

}