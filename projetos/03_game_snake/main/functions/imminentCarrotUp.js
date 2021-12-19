import { bunnyFinder, carrotFinder, isUpper } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'
import { outOfRange } from '../utils/outOfRange.js'

export function imminentCarrotUp(grid) {
  const bunnyIndex = bunnyFinder(grid)
  const bunnyLine = bunnyIndex[0]
  const bunnyColumn = bunnyIndex[1]
  const carrotPosition = carrotFinder(grid)
  const carrotLine = carrotPosition[0]
  const carrotColumn = carrotPosition[1]

  if (
    isUpper(grid) &&
    coordinates[carrotLine][carrotColumn] ==
      coordinates[bunnyLine + 7][bunnyColumn + 1]
  ) {
    return true
  } else if (
    isUpper(grid) &&
    !outOfRange(carrotLine) &&
    !outOfRange(bunnyLine) &&
    coordinates[carrotLine][carrotColumn] ==
      coordinates[bunnyLine + 7][bunnyColumn + 1]
  ) {
    return true
  } else if (
    !isUpper(grid) &&
    outOfRange(bunnyLine) &&
    bunnyLine >= 29 &&
    bunnyLine - coordinates[carrotLine][carrotColumn] == 16
  ) {
    return true
  } else if (
    outOfRange(bunnyLine) &&
    bunnyLine >= 29 &&
    bunnyLine - coordinates[carrotLine][carrotColumn] == 16
  ) {
    return true
  } else if (
    !isUpper(grid) &&
    coordinates[bunnyLine - 1][bunnyColumn - 1] ==
      coordinates[carrotLine][carrotColumn]
  ) {
    return true
  } else {
    return false
  }
}
