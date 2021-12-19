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
      coordinates[bunnyLine + 7][bunnyColumn + 1] &&
    carrotLine > bunnyLine
  ) {
    return true
  } else if (bunnyLine - carrotLine == 1 && carrotColumn - bunnyColumn <= 1) {
    return true
  } else {
    return false
  }
}
