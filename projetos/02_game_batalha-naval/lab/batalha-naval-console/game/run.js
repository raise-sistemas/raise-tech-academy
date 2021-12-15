import { changePlayerView, view} from "../display/index.js"



export function run(game){
  while (game.status)
  for (const player of game.players){
    changePlayerView(player)
    view(player)
  }  
}