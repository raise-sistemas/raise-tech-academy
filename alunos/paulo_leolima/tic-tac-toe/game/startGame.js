import { playerOneScore, playerTwoScore } from "./score/setScore.js";
import * as basicElements from "./utils/basicElements.js";
import { isBoardFull } from "./board/isBoardFull.js";
import { drawScreen } from "./draw/drawScreen.js";
import { continueGame } from "./continueGame.js";
import { setScore } from "./score/setScore.js";
import { yourTurn } from "./move/yourTurn.js";
import { isWinner } from "./isWinner.js";

export function start() {
  let currentPlayer = basicElements.PLAYER1;

  while (true) {
    drawScreen(basicElements.BOARD, playerOneScore, playerTwoScore);
    yourTurn(currentPlayer, basicElements.BOARD);

    if (isWinner(currentPlayer, basicElements.BOARD)) {
      setScore(currentPlayer);
      
      if (!continueGame(basicElements.BOARD)) break;
    } else {
      currentPlayer = currentPlayer === basicElements.PLAYER1
        ? basicElements.PLAYER2
        : basicElements.PLAYER1;
    }

    if (isBoardFull(basicElements.BOARD, basicElements.EMPTY)) {
      gameOver();
      
      if (!continueGame(basicElements.BOARD)) break;
    }
  }
}
