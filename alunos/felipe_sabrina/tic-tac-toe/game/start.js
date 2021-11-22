import { choice } from "./choice.js";
import { drawBoard } from "./drawBoard.js";
import { isWinner } from "./isWinner.js";
import { isBoardFull } from "./isBoardFull.js";
import { score } from "./score.js";
import { continueChoice } from "./continueChoice.js";
import * as constants from "../utils/general.js";
// import {restart} from "./restart.js";

export function start() {
  drawBoard(constants.board);
  let currentPlayer;
  currentPlayer = constants.PLAYER1;
  while (1) {
    score();
    choice(currentPlayer, constants.board);
    drawBoard(constants.board);
    if (isWinner(currentPlayer, constants.board)) {
      switch (currentPlayer) {
        case constants.PLAYER1:
          currentPlayer = constants.PLAYER1;
          break;
        case constants.PLAYER2:
          currentPlayer = constants.PLAYER2;
          break;
        default:
          break;
      }
      if (!continueChoice(constants.board)) break;
    } else {
      switch (currentPlayer) {
        case constants.PLAYER1:
          currentPlayer = constants.PLAYER2;
          break;
        case constants.PLAYER2:
          currentPlayer = constants.PLAYER1;
          break;
        default:
          break;
      }
    }
    if (isBoardFull(constants.board, constants.EMPTY)) {
      if (!continueChoice(constants.board)) break;
    }

    score();
    choice(currentPlayer, constants.board);
    drawBoard(constants.board);
    if (isWinner(currentPlayer, constants.board)) {
      switch (currentPlayer) {
        case constants.PLAYER1:
          currentPlayer = constants.PLAYER1;
          break;
        case constants.PLAYER2:
          currentPlayer = constants.PLAYER2;
          break;
        default:
          break;
      }
      if (!continueChoice(constants.board)) break;
    } else {
      switch (currentPlayer) {
        case constants.PLAYER1:
          currentPlayer = constants.PLAYER2;
          break;
        case constants.PLAYER2:
          currentPlayer = constants.PLAYER1;
          break;
        default:
          break;
      }
    }
    if (isBoardFull(constants.board, constants.EMPTY)) {
      if (!continueChoice(constants.board)) break;
    }
  }
}
