import { pipe } from "./utils/pipe.js"
import { character } from "./assets/character.js"
import {
  getSecretWord, 
  init, 
  display, 
  getInput 
} from "./game/index.js"

const run = pipe()

run(
  getSecretWord,
  init,
  gameState => display(gameState, character),
  getInput
  // To do ...
)
