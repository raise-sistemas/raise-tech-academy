import { gridTest } from './assets/defaultGrid.js'
import { goUp } from './controls/goUp.js'
import { newCarrot } from './functions/newCarrot.js'
import { imminentCarrotUp } from './imminent-carrot/imminentCarrotUp.js'
// import { timeout } from './assets/timeout.js'

export function play(grid) {
  console.log(grid)
  setInterval(() => {
    console.clear()
    grid = goUp(grid)
    console.log(imminentCarrotUp(grid))
  }, 500)
}

play(gridTest)
