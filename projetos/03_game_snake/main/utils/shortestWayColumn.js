import { bunnyFinder, carrotFinder } from '../functions/index.js'

export function shortestWayColumn(grid) {
  const bunnyLine = bunnyFinder(grid)[0]
  const carrotLine = carrotFinder(grid)[0]
  let shortestWay
  let wayUp
  let wayDown

  // Se o coelho estiver abaixo da cenoura:
  if (bunnyLine > carrotLine) {
    wayUp = bunnyLine - carrotLine
    wayDown = 7 - bunnyLine + carrotLine
  } else {
    wayUp = bunnyLine + (7 - carrotLine)
    wayDown = carrotLine - bunnyLine
  }

  if (wayUp > wayDown) {
    shortestWay = 'goingDown'
  } else {
    shortestWay = 'goingUp'
  }
  return shortestWay
}
