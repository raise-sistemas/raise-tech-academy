import { changePlayerView, view} from "../display/index.js"
import { setShot } from "./setShot.js"
import { readInputShot } from "./readInput.js"

export function run(game){
  while (game.status){
    let lastShot;
    for (const player of game.players){
      changePlayerView(player)
      view(player)
      setShot(lastShot,player,game.players)
      lastShot = readInputShot(prompt)
    }  
  }
}