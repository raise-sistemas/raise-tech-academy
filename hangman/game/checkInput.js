import { removeSpecials } from "../utils/removeSpecials.js";

export function checkInput([input, gameState]) {
  input = removeSpecials(input);
  let count = 0;
  const parsedWord = removeSpecials(gameState.secretWord);

  for (let i = 0; i < parsedWord.length; i++) {
    if (parsedWord.charAt(i) === input) {
      gameState.correct[i] = gameState.secretWord.charAt(i);
      count++;
    }
  }

  if (count === 0) {
    gameState.wrong.push(input);
    gameState.chances--;
  }

  return gameState;
}
