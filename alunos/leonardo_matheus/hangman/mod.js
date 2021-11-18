import { pipe } from "./utils/pipe.js"
import { character } from "./assets/character.js"
import { specialChar } from "./utils/specialChar.js"
import {
  getSecretWord, 
  init,
  display, 
  getInput,
  checkInput,
  updateState
} from "./game/index.js"


const game = pipe()(
  getSecretWord,
  init
)


while(game.status === "playing"){
  console.clear()
  
  const run = pipe(game) 

  run(
    gameState => display(gameState, character),
    getInput,
    tuple => checkInput(tuple, specialChar),
    updateState
  )
  
}

console.clear()
console.log(display(game, character).status)
