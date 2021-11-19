export const init = (secretWord, tips) => {
  const correct = new Array(secretWord.length)
  correct.fill(" ")
  return {
    secretWord: secretWord,
    status: "playing",
    chances: 6,
    correct: correct,
    wrong: [],
    tips: tips
  }
  
}