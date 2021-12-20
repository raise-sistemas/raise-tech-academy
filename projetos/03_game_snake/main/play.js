import { gridDefault } from './assets/defaultGrid.js'
import { timeout } from './assets/timeout.js'
import { goDown, goRight, goLeft, goUp } from './controls/index.js'
import { newCarrot } from './functions/newCarrot.js'
import { sleep } from './functions/sleep.js'
import { sameRow, sameColumn } from './utils/index.js'

let game = {
  state: 'goingRight',
  grid: newCarrot(gridDefault),
  score: 0
}

function move(game) {
  switch (game.state) {
    case 'goingRight':
      return goRight(game)

    case 'goingDown':
      return goDown(game)

    case 'goingLeft':
      return goLeft(game)

    case 'goingUp':
      return goUp(game)
  }
}

while (true) {
  game = move(game)

  if (sameColumn(game.grid)) {
    await sleep(timeout)
    game.state = 'goingDown'
    game = move(game)
  } else if (sameRow(game.grid)) {
    game.state = 'goingRight'
    await sleep(timeout)
    game = move(game)
  }

  console.log(game.score)
  await sleep(timeout)
}
