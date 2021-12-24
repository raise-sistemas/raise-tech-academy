import { setShips } from "./setShips.js"
import { newGame } from "./newGame.js"
import { changePlayerView, view } from "../../display/index.js"
import { getBot } from "./getBot.js"

export function setup(){
  const  bot = getBot()

  const  game = newGame(bot)
  for(let player of game.players){

    if(!player.bot){
      if(!bot){
      changePlayerView(player)
      }
      view(player)
    }
    
    player = setShips(player)

  }

  return game
}