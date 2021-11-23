import { isValidMove } from "../move/isValidMove.js";

// refatorar para apenas retornar a linha e coluna
export function yourTurn(currentPlayer, board) {
  let input = prompt(`\nVez do jogador: ${currentPlayer}\nDigite a linha:`);
  const row = +input.charAt(0);
  input = prompt("Digite a coluna:");
  const col = +input.charAt(0);
  isValidMove(board, row, col, currentPlayer);
}
