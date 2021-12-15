import { newGame } from "./game/start/newGame.js"
import { run } from "./game/run.js"
import { changePlayerView, view } from "./display/index.js"
import { setShips } from "./game/start/setShips.js"
import { setName } from "./game/start/setName.js"

export function init(){
const game = newGame()
for(let player of game.players){
  player.name = setName(game.players.indexOf(player)+1,prompt)
  
  changePlayerView(player)

  view(player)

  player = setShips(player)

}
run(game)

}
