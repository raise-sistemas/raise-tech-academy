import { buildGrid } from "./components/buildGrid.js"

export function view(player){
  console.clear()
  console.log("%c"+buildGrid(player.grid,player.enemyGrid), 
  "color: white ; font-weight: bold ; " )
}