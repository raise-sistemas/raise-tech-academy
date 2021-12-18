import { bunnyFinder, carrotFinder, isUpper } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'

export function imminentCarrotUp(grid) {
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
  } else if (isUpper(grid) && coordinates[bunnyLine + 7][bunnyColumn + 1]) {
    return true
  } else if (
    // Por conta da indexação, o índice encontrado é sempre 1 a menos que o da cenoura, em linha ou coluna.
    coordinates[carrotLine][carrotColumn] ==
    coordinates[bunnyLine - 1][bunnyColumn - 1]
  ) {
    return true
  } else {
    return false
  }
}
