import { choice } from "./choice.js";
import { EMPTY } from "../utils/general.js";

export function isVoid(board, row, col, currentPlayer) {
  if (board[row][col] === EMPTY) {
    // a mutação do board precisa ser feita separadamente e de forma bem clara
    board[row][col] = currentPlayer;
    return true;
  } else {
    console.log("Essa posição já foi escolhida, escolha outra.\n");
    choice(currentPlayer, board);
    return false;
  }
}
