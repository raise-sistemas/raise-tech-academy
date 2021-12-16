import { buildEndView } from "./components/buildEndView.js"
import { buildGrid } from "./components/buildGrid.js"
import { getEnemy } from "../game/getEnemy.js"

export function endView(game){
  console.clear()
  console.log("%c"+buildEndView(game),
  "color: white")
  console.log("%c"+buildGrid(game.players[game.winner].grid, getEnemy(game.players,game.players[game.winner]).grid), 
  "color: white ; font-weight: bold ; " )
}