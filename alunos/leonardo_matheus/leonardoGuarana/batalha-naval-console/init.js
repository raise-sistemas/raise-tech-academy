import { newGame } from "./game/start/newGame.js"
import { view } from "./display/view.js"
export function init(){

const players = newGame()
view(players.playerOne)


}
