export function buildGrid(grid,enemyGrid){
  const playerGridAux = grid.map((element)=> element.join(""))
  const enemyGridAux = enemyGrid.map((element)=> element.join(""))
  const buildGrid = playerGridAux.map((element,index)=> element.concat("      ",enemyGridAux[index]))
  return`
  ${buildGrid.join("\n")}  
  `
}