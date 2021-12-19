import { setShips } from "./setShips.js"
import { newGame } from "./newGame.js"
import { changePlayerView, view } from "../../display/index.js"

export function setup(){
  const  game = newGame()
  for(let player of game.players){
    
    changePlayerView(player)
    view(player)

    player = setShips(player)

  }
}