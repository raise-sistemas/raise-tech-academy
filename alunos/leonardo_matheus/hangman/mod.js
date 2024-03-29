import { pipe } from "./utils/pipe.js"
import {
  getSecretWord, 
  init,
} from "./game/index.js"
import { run } from "./run.js"


pipe()(
  getSecretWord,
  init,
  newGame => run(newGame, console.log, prompt, console.clear),
  console.log
)
