import { bunnyFinder, carrotFinder } from '../functions/index.js'

export function shortestWayColumn(grid) {
  const bunnyCoordinantes = bunnyFinder(grid)
  const carrotCoordinates = carrotFinder(grid)
  const bunnyLine = bunnyCoordinantes[0]
  const carrotLine = carrotCoordinates[0]
  let shortestWay
  let wayUp
  let wayDown

  // Se o coelho estiver abaixo da cenoura:
  if (bunnyLine > carrotLine) {
    console.log('coelho abaixo')
    wayUp = bunnyLine - carrotLine
    wayDown = 7 - bunnyLine + carrotLine
  } else {
    console.log('coelho acima')
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
