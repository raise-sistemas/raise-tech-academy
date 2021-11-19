import { pipe } from "./utils/pipe.js"
import { character } from "./assets/character.js"
import { removeSpecials } from "./utils/removeSpecials.js"
import {
  display, 
  getInput,
  checkInput,
  updateState
} from "./game/index.js"

export const run = (game, log, input, clear) => {
  clear()

  const current = pipe(game)(
    gameState => display(gameState, character, log),
    gameState => getInput(gameState, input),
    tuple => checkInput(tuple, removeSpecials),
    updateState
  )
  
  if(current.status === "playing") return run(current, log, input, clear)

  clear()

  return display(game, character, log)
}


