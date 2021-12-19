import { bunnyFinder } from '../functions/bunnyFinder.js'

export function isBunnyUpper(grid) {
  const bunnyLine = bunnyFinder(grid)[0]
  // Caso a linha do coelho seja a 0, que é a primeira linha do grid, significa que ele está no topo.
  // Por isso, retorna true.
  if (bunnyLine === 0) {
    return true
  } else {
    return false
  }
}
