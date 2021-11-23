import { drawScore } from "./draw/drawScore.js";
import { drawBoard } from "./draw/drawBoard.js";
import { resetBoard } from "./board/resetBoard.js";

// Separar o input da decisão baseada no input
export function continueGame(board) {
  // trocar prompt pelo confirm
  const resp = prompt("Deseja continuar?(s/n)");
  if (resp === "s" || resp === "S") {
    resetBoard(board);
    drawBoard(board);
    return true;
  }
  if (resp === "n" || resp === "N") {
    drawScore();
    return false;
  }
  return false;
}
