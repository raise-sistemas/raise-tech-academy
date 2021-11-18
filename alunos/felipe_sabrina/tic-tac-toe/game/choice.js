//ok
import {isVoid} from "./isVoid.js";
export function choice(currentPlayer, board){
    const input = prompt(`Jogador: ${currentPlayer}. Digite a linha e coluna:`);
    const row = +input.charAt(0);
    const col = +input.charAt(1);
    isVoid(board, row, col, currentPlayer);
  }