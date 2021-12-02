import { PLAYER1 } from "../utils/basicElements.js";

export let playerOneScore = 0;
export let playerTwoScore = 0;

export function setScore(currentPlayer) {
  return currentPlayer === PLAYER1 ? playerOneScore++ : playerTwoScore++;
}
