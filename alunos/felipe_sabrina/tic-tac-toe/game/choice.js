//ok
import { isVoid } from "./isVoid.js";
// refatorar para apenas retornar a linha e coluna
export function choice(currentPlayer, board) {
  let input = prompt(`\nVez do jogador: ${currentPlayer}\nDigite a linha:`);
  const row = +input.charAt(0);
  input = prompt("Digite a coluna:");
  const col = +input.charAt(0);
  isVoid(board, row, col, currentPlayer);
}
