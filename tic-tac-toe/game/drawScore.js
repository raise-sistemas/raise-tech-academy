import { playerOneValue as X } from "./isWinner.js";
import { playerTwoValue as O } from "./isWinner.js";

// Passar para o drawScore a pontuação por parâmetro.
// Separar o build da string do console.log.

export function drawScore() {
  return console.log(buildScore(X, O));
}

export function buildScore(x, o) {
  return `Score:
X: ${x} ponto(s)
O: ${o} ponto(s)`;
}
