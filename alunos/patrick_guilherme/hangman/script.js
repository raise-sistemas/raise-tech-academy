import { pipe } from '../../leonardo_matheus/hangman/utils/pipe.js'
import {
  getSecretWord,
  init
} from '../../leonardo_matheus/hangman/game/index.js'
import { run } from '../../leonardo_matheus/hangman/run.js'
import { character } from '../../leonardo_matheus/hangman/assets/character.js'

// Traz o primeiro status do jogo
let state1 = character[0]
// Separa os caracteres por linha, para poder inserir no HTML
state1 = state1.split('\n')

// Esse "for" pega cada uma das linhas do desenho da forca, e adiciona elas a uma div.
for (let index = 0; index < state1.length; index++) {
  const div = document.createElement('div')
  const section1 = document.querySelector('.section1')

  div.innerHTML = state1[index]
  section1.appendChild(div)
}

// Para verificar se o que foi digitado é uma letra:
const checker = /[a-z]/i

// Atribui dois eventos ao botão Enter
document.querySelector('button').addEventListener('click', function () {
  // Verifica se realmente foi uma letra e guarda ela na variável.
  let letra = document.querySelector('input').value[0]
  if (!checker.test(letra)) {
    alert('Digite apenas letras!')
  }

  // Depois limpa o input
  document.querySelector('input').value = ''
})

// pipe()(
//   getSecretWord,
//   init,
//   newGame => run(newGame, console.log, prompt, console.clear),
//   console.log
// )

// function clearInput() {
//   document.querySelector('input').value = ''
// }
