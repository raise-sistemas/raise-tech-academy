import { EMPTY } from "../utils/general.js";
// renomear para resetBoard
export function restart(board) {
  board.forEach((element) => {
    element[0] = EMPTY;
    element[1] = EMPTY;
    element[2] = EMPTY;
  });
}
