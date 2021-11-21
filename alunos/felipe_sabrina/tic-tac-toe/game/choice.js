//ok
import {isVoid} from "./isVoid.js";
export function choice(currentPlayer, board){
    let input = prompt(`Jogador: ${currentPlayer}\nDigite a linha:`);
    const row = +input.charAt(0);
    input = prompt("Digite a coluna:");
    const col = +input.charAt(0);
    isVoid(board, row, col, currentPlayer);
  }