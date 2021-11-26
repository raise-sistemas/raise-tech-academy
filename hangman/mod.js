import words from "./assets/words.js"
import { getSecretWord, getTips, init} from "./game/index.js"
import { endGame } from "./views/components/endGame.js"
import { run } from "./run.js"

const word = getSecretWord(words)
const tips = await getTips(word)
const newGame = init(word, tips)

const game = run(newGame, prompt)

console.log(endGame(game.status,game.secretWord))
