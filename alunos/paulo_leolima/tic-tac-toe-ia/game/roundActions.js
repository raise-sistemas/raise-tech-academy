import { EMPTY, PLAYER1, PLAYER2 } from "./utils/basicElements.js";
import { playerOneScore, playerTwoScore } from "./score/setScore.js";
import { congratulations } from "./congratulations.js";
import { isBoardFull } from "./board/isBoardFull.js";
import { drawScreen } from "./draw/drawScreen.js";
import { continueGame } from "./continueGame.js";
import { winnerCheck } from "./winnerCheck.js";
import { setScore } from "./score/setScore.js";
import { replayGame } from "./replayGame.js";
import { endGame } from "./endGame.js";
import {isFutureDraw} from "./isFutureDraw.js";


export function roundActions(BOARD, currentPlayer){


    if (winnerCheck(BOARD, currentPlayer)) {
        drawScreen(BOARD, playerOneScore, playerTwoScore);
        congratulations(currentPlayer);
        setScore(currentPlayer);
  
        if (!replayGame(BOARD, continueGame()))return false, currentPlayer;
      } else {
        currentPlayer = currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1;
      }
      if (isBoardFull(BOARD, EMPTY)) {
        drawScreen(BOARD, playerOneScore, playerTwoScore);
        endGame();
  
        if (!replayGame(BOARD, continueGame()))return false, currentPlayer;
      }
      if(isFutureDraw(BOARD, currentPlayer)){
        drawScreen(BOARD, playerOneScore, playerTwoScore);
        console.log("Fim de jogo, deu velha, não há mais como vencer!");
        if (!replayGame(BOARD, continueGame())) return false, currentPlayer;
      };


      return true, currentPlayer


}