import { choice } from "./choice.js";
import { continueChoice } from "./continueChoice.js";
import { drawBoard } from "./drawBoard.js";
import { drawScore } from "./drawScore.js";
import { isWinner } from "./isWinner.js";
import { isBoardFull } from "./isBoardFull.js";
import * as constants from "../utils/general.js";
// import {restart} from "./restart.js";

export function start() {
  drawBoard(constants.BOARD);
  let currentPlayer;
  currentPlayer = constants.PLAYER1;
  while (true) {
    drawScore();
    choice(currentPlayer, constants.BOARD);
    drawBoard(constants.BOARD);
    if (isWinner(currentPlayer, constants.BOARD)) {
      if (!continueChoice(constants.BOARD)) break;
    } else {
      currentPlayer = currentPlayer === constants.PLAYER1
        ? constants.PLAYER2
        : constants.PLAYER1;
    }
    if (isBoardFull(constants.BOARD, constants.EMPTY)) {
      if (!continueChoice(constants.BOARD)) break;
    }
  }
}
