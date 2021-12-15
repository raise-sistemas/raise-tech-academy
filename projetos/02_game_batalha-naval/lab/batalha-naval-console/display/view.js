import { buildView } from "./components/buildView.js"
export function view(player){
  console.log(buildView(player.grid,player.enemyGrid))
}