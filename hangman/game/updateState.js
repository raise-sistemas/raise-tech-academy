import { removeSpecials } from "../utils/removeSpecials.js";

export function updateState(entry, game) {
  const clone = JSON.parse(JSON.stringify(game));

  entry = removeSpecials(entry);
  let count = 0;
  const parsedWord = removeSpecials(clone.secretWord);

  for (let i = 0; i < parsedWord.length; i++) {
    if (parsedWord.charAt(i) === entry) {
      clone.correct[i] = clone.secretWord.charAt(i);
      count++;
    }
  }

  if (count === 0) {
    clone.wrong.push(entry);
    clone.chances--;
  }

  return clone;
}
