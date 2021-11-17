import { pipe } from "./utils/pipe.js"
import { character } from "./assets/character.js"
import { getSecretWord } from "./game/getSecretWord.js"
import { init } from "./game/init.js"
import { display } from "./game/display.js"
import { getInput } from "./game/getInput.js"
const run = pipe()

run(
  getSecretWord,
  init,
  gameState => display(gameState, character),
  getInput
  // To do ...
)
