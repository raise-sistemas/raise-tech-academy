import { bunnyFinder } from '../utils/bunnyFinder.js'
import { carrotFinder } from '../utils/carrotFinder.js'
import { isOver } from '../utils/IsOver.js'
import { newCarrot } from '../utils/newCarrot.js'

// import { gridFromBottom } from '../assets/defaultGrid.js'

export function walkToUp(grid) {
  const index = bunnyFinder(grid)[0]
  const carrotIndex = carrotFinder(grid)
  console.clear()

  // Caso esteja no topo, vai voltar pra embaixo.
  if (isOver(grid)) {
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)

    // Pra garantir que não vai pegar um dos índices na cenoura:
    // Caso a cenoura esteja à esquerda
    if (index + 105 !== '⬛') {
      grid[index + 106] = '🐰'
      grid = grid.join('')
      console.log(index)
    }
  }
  // Caso esteja no topo e a cenoura esteja na base da mesma coluna:, vai gerar uma nova, e ir pra onde ela tava.
  else if (isOver(grid) && carrotIndex(grid)[0] == index + 105) {
    grid = newCarrot(grid)
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index + 105] = '🐰'
    grid = grid.join('')
  }

  // Caso esteja embaixo da cenoura, gera uma nova, e o coelho anda pra cima
  else if (index - 15 == carrotIndex) {
    grid = newCarrot(grid)
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index - 15] = '🐰'
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index - 15] = '🐰'
    grid = grid.join('')
    console.log(index)
  }
  // setTimeout(() => {
  console.log(grid)
  return grid
}

// walkToUp()
