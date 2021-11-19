import { pipe } from "./utils/pipe.js"
import { tips } from "./utils/tips.js"
import {
  getSecretWord, 
  init,
} from "./game/index.js"
import { run } from "./run.js"


const game = await pipe()(
  getSecretWord,
  secretWord => init(secretWord, tips),
  newGame => run(newGame, console.log, prompt, console.clear)
)


