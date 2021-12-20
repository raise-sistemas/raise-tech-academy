import { coordinates } from '../assets/indexes.js'
import { carrotFinder } from '../functions/carrotFinder.js'

export function isCarrotUpper(grid) {
  let finder = false
  const carrotPosition = carrotFinder(grid)

  // Vai tentar capturar o índex do coelho por coordenadas, caso não funcione (isso é, caso o coelho esteja no canto direito da tela), ele vai usar index pra avaliar.
  try {
    const carrotIndex = coordinates[carrotPosition[0]][carrotPosition[1]]
    for (let i = 29; i <= 43; i++) {
      if (carrotIndex == i) {
        finder = true
        break
      }
    }
    return finder
  } catch {
    for (let i = 29; i <= 43; i++) {
      if (carrotPosition[0] == i) {
        finder = true
        break
      }
    }
    return finder
  }
}
