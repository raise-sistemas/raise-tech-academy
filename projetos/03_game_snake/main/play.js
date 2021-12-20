import { gridTest } from './assets/defaultGrid.js'
import { goDown, goUp, goRight, goLeft } from './controls/index.js'
import { newCarrot } from './functions/newCarrot.js'
import { imminentCarrotUp } from './imminent-carrot/imminentCarrotUp.js'
// import { timeout } from './assets/timeout.js'

export function play(grid) {
  console.log(grid)
  setInterval(() => {
    console.clear()
    grid = goLeft(grid)
    // console.log(imminentCarrotUp(grid))
  }, 150)
}

play(gridTest)
