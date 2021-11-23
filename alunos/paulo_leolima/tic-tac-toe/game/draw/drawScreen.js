import { drawHeader } from "./drawHeader.js";
import { drawBoard } from "./drawBoard.js";
import { drawScore } from "./drawScore.js";

export function drawScreen(board, x, o) {
  drawHeader();
  drawBoard(board);
  drawScore(x, o);
}
