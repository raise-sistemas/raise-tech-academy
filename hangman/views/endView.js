import { player } from "./components/player.js"
import { endGuesses } from "./components/endGuesses.js"
import { bar } from "./components/bar.js"
import { wrongGuesses } from "./components/wrongGuesses.js"
import { gameStatus } from "./components/gameStatus.js"

export function endView(gameState) {
  const { chances,  status, secretWord, wrong, correct } = gameState

  return `
  ${player(chances)}
  ${endGuesses(correct, secretWord)}
  ${bar(secretWord.length)}
  ${wrongGuesses(wrong)}
  ${gameStatus(status, secretWord)}
  `

}