import { playerOneScore, playerTwoScore } from "./setScore.js";
import * as constants from "../utils/general.js";
import { continueGame } from "./continueGame.js";
import { isBoardFull } from "./isBoardFull.js";
import { drawBoard } from "./drawBoard.js";
import { drawScore } from "./drawScore.js";
import { setScore } from "./setScore.js";
import { isWinner } from "./isWinner.js";
import { choice } from "./choice.js";

export function start() {
  let currentPlayer = constants.PLAYER1;

  drawBoard(constants.BOARD);
  
  while (true) {
    drawScore(playerOneScore, playerTwoScore);
    choice(currentPlayer, constants.BOARD);
    drawBoard(constants.BOARD);

    if (isWinner(currentPlayer, constants.BOARD)) {
      setScore(currentPlayer);
      
      if (!continueGame(constants.BOARD)) break;
    } else {
      currentPlayer = currentPlayer === constants.PLAYER1
        ? constants.PLAYER2
        : constants.PLAYER1;
    }
    if (isBoardFull(constants.BOARD, constants.EMPTY)) {
      if (!continueGame(constants.BOARD)) break;
    }
  }
}
