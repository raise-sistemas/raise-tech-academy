import { playerOneValue } from "./isWinner.js";
import { playerTwoValue } from "./isWinner.js";
// Passar para o drawScore a pontuação por parâmetro.
// Separar o build da string do console.log.
export function score() {
  console.log("Score:");
  console.log(`X: ${playerOneValue} ponto(s)`);
  console.log(`O: ${playerTwoValue} ponto(s)`);
}

export function buildScore(x, o) {
  return `Score:
X: ${x} ponto(s)
O: ${o} ponto(s)`;
}
