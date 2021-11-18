import { pipe } from "./utils/pipe.js"
import { character } from "./assets/character.js"
import { specialChar } from "./utils/specialChar.js"
import {
  display, 
  getInput,
  checkInput,
  updateState
} from "./game/index.js"

export const run = (game) => {
  console.clear()

  const current = pipe(game)(
    gameState => display(gameState, character),
    getInput,
    tuple => checkInput(tuple, specialChar),
    updateState
  )
  
  if(current.status === "playing") return run(current)

  console.clear()
  console.log(display(game, character).status)
}


