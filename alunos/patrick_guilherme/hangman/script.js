import { pipe } from '../../leonardo_matheus/hangman/utils/pipe.js'
import {
  getSecretWord,
  init
} from '../../leonardo_matheus/hangman/game/index.js'
import { run } from '../../leonardo_matheus/hangman/run.js'
import { character } from '../../leonardo_matheus/hangman/assets/character.js'

let state1 = character[0]
state1 = state1.split('\n')

for (let index = 0; index < state1.length; index++) {
  const div = document.createElement('div')
  const section1 = document.querySelector('.section1')

  div.innerHTML = state1[index]
  section1.appendChild(div)
}

// pipe()(
//   getSecretWord,
//   init,
//   newGame => run(newGame, console.log, prompt, console.clear),
//   console.log
// )
