export function isBoardFull(board, empty) {
  const pos = "X";
  if (board.every(pos !== empty)) {
    return true;
  }
  return false;
}
// Continuar aqui, percorrer o vetor e comparar
// vendo se está vazio.