export const init = async (secretWord, getTips = () => {}) => {
  const correct = new Array(secretWord.length)
  correct.fill(" ")
  const tips = await getTips(secretWord)
  console.log(tips)
  return {
    secretWord: secretWord,
    status: "playing",
    chances: 6,
    correct: correct,
    wrong: [],
    tips: {
      class: tips ? tips.class : [],
      synonyms: tips ? tips.synonyms : []
    }
  }
  
}