import { view } from "../display/view.js"
import { setShips } from "./start/setShips.js"
export function run(players){
  view(players.playerOne)
  setShips(players.playerOne)
}