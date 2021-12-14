import { newGame } from "./game/start/newGame.js"
import { run } from "./game/run.js"
export function init(){

const players = newGame()
run(players)

}
