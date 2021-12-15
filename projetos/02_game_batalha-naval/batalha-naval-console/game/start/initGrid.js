export function initGrid(emoji){
  let grid= new Array(10)
  const numbers = ['10 ', '9  ', '8  ' , '7  ', '6  ', '5  ', '4  ', '3  ', '2  ', '1  ']
  const letters = ['  A ', 'B ',  'C ', 'D ', 'E ', 'F ', 'G ', 'H ', 'I ', 'J  ']
  grid.fill(new Array(10))
  grid = grid.map(line => line.fill(emoji))
  grid = grid.map((element, index) => [...element, numbers[index]].reverse())
  grid.push(letters)
  grid.reverse()
  return grid
}
