import { player } from "./components/player.js"
import { endGuesses } from "./components/endGuesses.js"
import { bar } from "./components/bar.js"
import { wrongGuesses } from "./components/wrongGuesses.js"
import { gameStatus } from "./components/gameStatus.js"

export function endView(gameState) {
  const end = 
  `
  ${player(gameState.chances)}
  ${endGuesses(gameState.correct, gameState.secretWord)}
  ${bar(gameState.secretWord.length)}
  ${wrongGuesses(gameState.wrong)}
  ${gameStatus(gameState.status, gameState.secretWord)}
  `

  return end;
}