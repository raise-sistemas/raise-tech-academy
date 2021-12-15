import { buildView } from "./components/buildView.js"
export function view(player){
  console.clear()
  console.log(buildView(player.grid,player.enemyGrid))
}