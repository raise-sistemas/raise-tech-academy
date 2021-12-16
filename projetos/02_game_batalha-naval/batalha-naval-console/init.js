import { newGame } from "./game/start/newGame.js"
import { run } from "./game/run.js"
import { changePlayerView, view, endView } from "./display/index.js"
import { setShips } from "./game/start/setShips.js"


export function init(){
let game = newGame()
for(let player of game.players){
  
  changePlayerView(player)
  view(player)

  player = setShips(player)

}
game = run(game)

endView(game)

}
