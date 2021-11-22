import { EMPTY } from "../utils/general.js";

export function resetBoard(board) {
  board.forEach((element) => {
    element[0] = EMPTY;
    element[1] = EMPTY;
    element[2] = EMPTY;
  });
}
