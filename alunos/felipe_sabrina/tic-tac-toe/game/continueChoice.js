import { restart } from "./restart.js";
import { score } from "./score.js";

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
    score();
    return false;
  }
  return false;
}
