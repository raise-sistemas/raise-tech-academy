export function carrotFinder(grid) {
  grid = grid.split('')
  let finder = []
  for (let index = 29; index < 145; index++) {
    if (grid[index] + grid[index + 1] == '🥕') {
      finder.push(index, index + 1)
      break
    }
  }

  if (finder[0]) {
    return finder
  } else {
    return false
  }
}
