import { getSecretWord, getTips, init, endGame } from "./game/index.js"
import { run } from "./run.js"

const word = getSecretWord()
const tips = await getTips(word)
const newGame = init(word, tips)

const game = run(newGame, console.log, prompt, console.clear)

endGame(game, console.log)
