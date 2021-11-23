import { PLAYER1 } from "../utils/basicElements.js";

export let playerOneScore = 0;
export let playerTwoScore = 0;

export function setScore(currentPlayer) {
    if (currentPlayer === PLAYER1) {
        return playerOneScore++;
    } else {
        return playerTwoScore++;
    }
}