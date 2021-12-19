import { coordinates } from '../assets/indexes.js'
import { bunnyFinder } from '../functions/bunnyFinder.js'

export function isUpper(grid) {
  let finder = false
  const bunnyPosition = bunnyFinder(grid)

  // Vai tentar capturar o índex do coelho por coordenadas, caso não funcione (isso é, caso o coelho esteja no canto direito da tela), ele vai usar index pra avaliar.
  try {
    const bunnyIndex = coordinates[bunnyPosition[0]][bunnyPosition[1]]
    for (let i = 29; i <= 43; i++) {
      if (bunnyIndex == i) {
        finder = true
        break
      }
    }
    return finder
  } catch {
    for (let i = 29; i <= 43; i++) {
      if (bunnyPosition[0] == i) {
        finder = true
        break
      }
    }
    return finder
  }
}
