import { EMPTY, BOARD, PLAYER1, PLAYER2 } from "./utils/basicElements.js";
import { playerOneScore, playerTwoScore } from "./score/setScore.js";
import { congratulations } from "./congratulations.js";
import { isBoardFull } from "./board/isBoardFull.js";
import { drawScreen } from "./draw/drawScreen.js";
import { continueGame } from "./continueGame.js";
import { winnerCheck } from "./winnerCheck.js";
import { setScore } from "./score/setScore.js";
import { replayGame } from "./replayGame.js";
import { gameInput } from "./gameInput.js";
import { endGame } from "./endGame.js";

export function startGame() {
  let currentPlayer = PLAYER1;

  do {
    drawScreen(BOARD, playerOneScore, playerTwoScore);
    gameInput(BOARD, currentPlayer);

    if (winnerCheck(currentPlayer, BOARD)) {
      drawScreen(BOARD, playerOneScore, playerTwoScore);
      congratulations(currentPlayer);
      setScore(currentPlayer);

      if (!replayGame(BOARD, continueGame())) break;
    } else {
      currentPlayer = currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1;
    }

    if (isBoardFull(BOARD, EMPTY)) {
      drawScreen(BOARD, playerOneScore, playerTwoScore);
      endGame();

      if (!replayGame(BOARD, continueGame())) break;
    }
  } while (true);
}
