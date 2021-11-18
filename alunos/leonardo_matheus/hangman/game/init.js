export const init = (secretWord) => {
  const correct = []
  for(let i = 0; i < secretWord.length; i++) {
    correct.push(" ")
  }
  return {
    secretWord: secretWord,
    status: "playing",
    chances: 6,
    correct: correct,
    wrong: []
  }
}