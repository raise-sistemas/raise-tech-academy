import { player } from "./components/player.js"
import { correctGuesses } from "./components/correctGuesses.js"
import { bar } from "./components/bar.js"
import { wrongGuesses } from "./components/wrongGuesses.js"
import { tips } from "./components/tips.js"

export function mainView(gameState) {
  let main = 
  `
  ${player(gameState.chances)}
  ${correctGuesses(gameState.correct)}
  ${bar(gameState.secretWord.length)}
  ${wrongGuesses(gameState.wrong)}

  `
  if(gameState.chances < 2) {
    main += tips(gameState.tips.class, gameState.tips.synonyms)
  } else if(gameState.chances < 3) {
    main += tips(gameState.tips.class)
  }

  return main;
}
