import { bunnyFinder, carrotFinder } from '../utils/index.js'

export function imminentCarrotUp(grid) {
  const bunnyIndex = bunnyFinder(grid)
  const bunnyLine = bunnyIndex[0]
  const bunnyColumn = bunnyIndex[1]

  const carrotPosition = carrotFinder(grid)
  const carrotLine = carrotPosition[0]
  const carrotColumn = carrotPosition[1]

  if (isBunnyUpper(grid) && carrotColumn === bunnyColumn && carrotLine === 7) {
    return true
  }

  // O segundo caso possível de comida iminente, como o coelho está subindo, é que a linha abaixo da cenoura seja a dele, isso é carrotLine + 1, e que eles estejam na mesma coluna.
  else if (bunnyColumn === carrotColumn && carrotLine + 1 === bunnyLine) {
    return true
  }

  // Se esses casos não acontecerem, não tem cenoura iminente enquanto o coelho sobe.
  else {
    return false
  }
}
