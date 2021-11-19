import { pipe } from "./utils/pipe.js"
import { character } from "./assets/character.js"
import { specialChar } from "./utils/specialChar.js"
import {
  display, 
  getInput,
  checkInput,
  updateState
} from "./game/index.js"

export const run = async (game, log, input, clear) => {
  clear()

  const current = await pipe(game)(
    gameState => display(gameState, character, log),
    gameState => getInput(gameState, input),
    tuple => checkInput(tuple, specialChar),
    updateState
  )
  
  if(current.status === "playing") return run(current, log, input, clear)

  clear()
  return display(game, character, log)
}


