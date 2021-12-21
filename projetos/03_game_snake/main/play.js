import { gridDefault } from './assets/defaultGrid.js'
import { move } from './controls/index.js'
import { newCarrot } from './functions/newCarrot.js'
import { sleep } from './functions/sleep.js'
import { sameRow, sameColumn, shortestWayColumn } from './utils/index.js'

const timeout = 200
let game = {
  state: 'goingRight',
  grid: newCarrot(gridDefault),
  score: 0
}

const verticals = ['goingDown', 'goingUp']
const horizontals = ['goingLeft', 'goingRight']
let randomHorizontal, randomVertical

while (true) {
  game = move(game)

  randomVertical = Math.round(Math.random())
  randomHorizontal = Math.round(Math.random())

  while (sameColumn(game.grid)) {
    await sleep(timeout)
    game.state = shortestWayColumn(game.grid)
    // game.state = verticals[randomHorizontal]
    game = move(game)
  }
  while (sameRow(game.grid)) {
    await sleep(timeout)
    game.state = horizontals[randomHorizontal]
    game = move(game)
  }

  await sleep(timeout)
}
