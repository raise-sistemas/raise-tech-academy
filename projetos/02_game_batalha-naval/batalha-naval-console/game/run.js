import { changePlayerView, view} from "../display/index.js"
import { setShot } from "./setShot.js"
import { readInputCoordinate } from "./readInput.js"
import { setEnemyShot } from "./setEnemyShot.js"
import { getEnemy } from "./getEnemy.js"
import { isWinner } from "./isWinner.js"

export function run(game){
  let lastShot;

  while (game.status){

    for (const player of game.players){
      if(game.status){
      setEnemyShot(lastShot,player.ships,player.grid)

      changePlayerView(player)
      view(player)

      lastShot = readInputCoordinate(prompt)
      setShot(lastShot,player,game.players)

      game.status = !isWinner(getEnemy(game.players,player).ships)
      game.Winner = game.players.indexOf(player)
      }
    }
  
  }
  return game
}