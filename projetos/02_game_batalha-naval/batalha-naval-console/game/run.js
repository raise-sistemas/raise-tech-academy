import { changePlayerView, view} from "../display/index.js"
import { drawShot } from "./drawShot.js"
import { readInputCoordinate } from "./readInput.js"
import { setShot } from "./setShot.js"
import { getEnemy } from "./getEnemy.js"
import { isWinner } from "./isWinner.js"

export function run(game){
  for (const player of game.players){
      const enemy = getEnemy(game.players,player)

      changePlayerView(player)
      view(player)

      const shot = readInputCoordinate(prompt)
      drawShot(shot,player,enemy.ships)
      enemy.ships = setShot(shot,enemy.ships,enemy.grid)
      

      console.log(enemy.ships)
      if(isWinner(enemy.ships)){
      game.Winner = game.players.indexOf(player)
      return game
      }
    }
  return run(game)  
  }
  