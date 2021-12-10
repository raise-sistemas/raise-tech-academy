export function initGrid(emoji){
  let grid= new Array(10)
  const nums = ['   1️⃣ ', '2️⃣ ', '3️⃣ ', '4️⃣ ', '5️⃣ ', '6️⃣ ', '7️⃣ ', '8️⃣ ', '9️⃣ ', '🔟  ']
  const letters = ['   🄹 ', '   🄸 ',  '   🄷 ', '   🄶 ', '   🄵 ', '   🄴 ', '   🄳 ', '   🄲 ', '   🄱 ', '   🄰 ']
  grid.fill(new Array(10))
  grid = grid.map(line => line.fill(emoji))
  grid = grid.map((element, index) => [...element, letters[index]].reverse())
  grid.push(nums)
  grid.reverse()
  return grid
}