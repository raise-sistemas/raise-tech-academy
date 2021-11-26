import words from "./assets/words.js"
import { getSecretWord, getTips, newGame} from "./game/index.js"
import { run } from "./run.js"

export async function init() {
  const word = getSecretWord(words)
  const tips = await getTips(word)
  const game = newGame(word, tips)

  const endRound = run(game, prompt)

  const keepGoing = prompt("Deseja jogar novamente? y/n");

  if(keepGoing.toUpperCase() === 'Y') return init()

  return endRound;
  
}