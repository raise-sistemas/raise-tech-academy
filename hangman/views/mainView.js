import { player } from "./components/player.js"
import { correctGuesses } from "./components/correctGuesses.js"
import { bar } from "./components/bar.js"
import { wrongGuesses } from "./components/wrongGuesses.js"
import { tips as displayTips } from "./components/tips.js"

export function mainView(gameState) {
  const { chances,  secretWord, wrong, correct, tips } = gameState
  
  return `
  ${player(chances)}
  ${correctGuesses(correct)}
  ${bar(secretWord.length)}
  ${wrongGuesses(wrong)}

  ${displayTips(tips.class, tips.synonyms, chances)}
  `
}
