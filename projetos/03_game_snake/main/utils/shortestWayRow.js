import { bunnyFinder, carrotFinder } from '../functions/index.js'

export function shortestWayRow(grid) {
  const bunnyColumn = bunnyFinder(grid)[1]
  const carrotColumn = carrotFinder(grid)[1]
  let shortestWay
  let wayRight
  let wayLeft

  // Se o coelho à direita da cenoura.
  if (bunnyColumn > carrotColumn) {
    wayRight = 11 - bunnyColumn + carrotColumn
    wayLeft = 7 - bunnyColumn - carrotColumn
  } else {
    wayRight = carrotColumn - bunnyColumn
    wayLeft = bunnyColumn + (11 - carrotColumn)
  }

  if (wayRight > wayLeft) {
    shortestWay = 'goingLeft'
  } else {
    shortestWay = 'goingRight'
  }
  return shortestWay
}
