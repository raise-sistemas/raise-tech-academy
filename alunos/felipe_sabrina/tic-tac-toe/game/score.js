import { playerOneValue } from "./isWinner.js";
import { playerTwoValue } from "./isWinner.js";
export function score() {
  console.log("Score:");
  console.log(`X: ${playerOneValue} ponto(s)\nO: ${playerTwoValue} ponto(s)`);
}
