import { playerOneScore, playerTwoScore } from "./score/setScore.js";
import { resetBoard } from "./board/resetBoard.js";
import { drawScreen } from "./draw/drawScreen.js";

export function replayGame(board, option) {
  switch (option) {
    case true:
      resetBoard(board);
      drawScreen(board, playerOneScore, playerTwoScore);
      return true;
    case false:
      drawScreen(board, playerOneScore, playerTwoScore);
      return false;
  }
}
