import {
  bunnyFinder,
  carrotFinder,
  isOnTheLeft,
  isOnTheRight,
  isUnder,
  isUpper
} from './index.js'
import { coordinates } from '../assets/indexes.js'

export function iminentCarrotUp(grid) {
  const bunnyIndex = bunnyFinder(grid)
  const bunnyLine = bunnyIndex[0]
  const bunnyColumn = bunnyIndex[1]
  const carrotPosition = carrotFinder(grid)
  const carrotLine = carrotPosition[0]
  const carrotColumn = carrotPosition[1]

  // Considerando que a cenoura ta na última posição do grid (146 e 147)
  // O maior index do grid é 145, por isso precisa somar 1 pra encontrar a cenoura.
  if (
    isUpper(grid) &&
    carrotPosition[0] == coordinates[bunnyLine + 7][bunnyColumn] + 1
  ) {
    return true
  } else if (
    isUpper(grid) &&
    coordinates[carrotLine][carrotColumn] ==
      coordinates[bunnyLine + 7][bunnyColumn]
  ) {
    return true
  } else if (
    coordinates[carrotLine][carrotColumn] ==
    coordinates[bunnyLine - 1][bunnyColumn]
  ) {
    return true
  } else {
    return false
  }
}
