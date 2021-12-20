import { gridDefault } from './assets/defaultGrid.js'
import { goDown, goRight, goLeft, goUp, move } from './controls/index.js'
import { newCarrot } from './functions/newCarrot.js'
import { sleep } from './functions/sleep.js'
import { sameRow, sameColumn } from './utils/index.js'

const timeout = 200
let game = {
  state: 'goingRight',
  grid: newCarrot(gridDefault),
  score: 0
}

const verticals = ['goingDown', 'goingUp']
const horizontals = ['goingLeft', 'goingRight']
let randomHorizontal
let randomVertical

// Math.round(Math.random())
while (true) {
  game = move(game)

  if (sameColumn(game.grid)) {
    await sleep(timeout)
    randomVertical = Math.round(Math.random())
    game.state = verticals[randomVertical]
    game = move(game)
  } else if (sameRow(game.grid)) {
    await sleep(timeout)
    randomHorizontal = Math.round(Math.random())
    game.state = horizontals[randomHorizontal]
    game = move(game)
  }

  await sleep(timeout)
}
