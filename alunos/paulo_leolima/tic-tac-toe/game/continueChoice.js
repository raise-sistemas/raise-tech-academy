import { drawScore } from "./drawScore.js";
import { restart } from "./restart.js";

// Separar o input da decisão baseada no input
export function continueChoice(board) {
  // trocar prompt pelo confirm
  const resp = prompt("Deseja continuar?(s/n)");
  if (resp === "s" || resp === "S") {
    restart(board);
    // agrupar essas responsabilidades no drawScreen
    console.clear();
    console.table(board);
    return true;
  }
  if (resp === "n" || resp === "N") {
    drawScore();
    return false;
  }
  return false;
}
