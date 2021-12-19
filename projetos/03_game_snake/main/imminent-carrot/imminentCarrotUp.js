import { isBunnyUpper } from '../utils/index.js'
import { bunnyFinder, carrotFinder } from '../functions/bunnyFinder.js'

export function imminentCarrotUp(grid) {
  const bunnyIndex = bunnyFinder(grid)
  const bunnyLine = bunnyIndex[0]
  const bunnyColumn = bunnyIndex[1]

  const carrotPosition = carrotFinder(grid)
  const carrotLine = carrotPosition[0]
  const carrotColumn = carrotPosition[1]

  if (isBunnyUpper(grid) && carrotColumn === bunnyColumn && carrotLine === 7) {
    return true
  } else if (bunnyColumn === carrotColumn && carrotLine + 1 === bunnyLine) {
    return true
  } else {
    return false
  }
}
