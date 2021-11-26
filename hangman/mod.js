import words from "./assets/words.js"
import { getSecretWord, getTips, init} from "./game/index.js"
import { run } from "./run.js"

const word = getSecretWord(words)
const tips = await getTips(word)
const newGame = init(word, tips)

const game = run(newGame, prompt)

