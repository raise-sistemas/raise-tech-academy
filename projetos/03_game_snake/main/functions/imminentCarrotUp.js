import { bunnyFinder, carrotFinder, isUpper } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'
import { outOfRange } from '../utils/outOfRange.js'
import { isCarrotUpper } from '../utils/isCarrotUpper.js'

export function imminentCarrotUp(grid) {
  const bunnyIndex = bunnyFinder(grid)
  const bunnyLine = bunnyIndex[0]
  const bunnyColumn = bunnyIndex[1]
  const carrotPosition = carrotFinder(grid)
  const carrotLine = carrotPosition[0]
  const carrotColumn = carrotPosition[1]

  if (isUpper(grid) && outOfRange(carrotLine) && carrotLine[0] == 146) {
    return true
  } else if (
    isUpper(grid) &&
    !outOfRange(carrotLine) &&
    !outOfRange(bunnyLine)
  ) {
    return true
  } else if (!isUpper(grid) && outOfRange(bunnyLine) && isCarrotUpper(grid)) {
  }

  // else if (isUpper(grid) && carrotLine[0] == 146) {
  //   return true
  // }

  // ) {
  //   return true
  // } else if (
  //   isUpper(grid) &&
  //   coordinates[carrotLine][carrotColumn] ==
  //     coordinates[bunnyLine + 7][bunnyColumn]
  // ) {
  //   return true
  // } else if (isUpper(grid) && coordinates[bunnyLine + 7][bunnyColumn + 1]) {
  //   return true
  // } else if (
  //   // Por conta da indexação, o índice encontrado é sempre 1 a menos que o da cenoura, em linha ou coluna.
  //   coordinates[carrotLine][carrotColumn] ==
  //   coordinates[bunnyLine - 1][bunnyColumn - 1]
  // ) {
  //   return true
  // } else {
  //   return false
  // }
}
