import { changePlayerView, view} from "../display/index.js"
import { drawShot } from "./drawShot.js"
import { readInputCoordinate, readInputBotShot } from "./readInput.js"
import { setShot } from "./setShot.js"
import { getEnemy } from "./getEnemy.js"
import { isWinner } from "./isWinner.js"
import { isRepeated } from "./isRepeated.js"
import { setBotMemory } from "../bot/setBotMemory.js"

export function run(game){
  for (const player of game.players){
      const enemy = getEnemy(game.players,player)

      let shot  
      if (player.bot){
        shot = readInputBotShot(isRepeated,player.shots,player.bot)
        setBotMemory(player.bot,shot,enemy.ships)

      }else{
        changePlayerView(player)
        view(player)
        
        shot = readInputCoordinate(isRepeated,player.shots,prompt)
      }
      drawShot(shot,player,enemy.ships)
      enemy.ships = setShot(shot,enemy.ships,enemy.grid)
      player.shots.push(shot)
      if(isWinner(enemy.ships)){
      game.winner = game.players.indexOf(player)
      return 
      }
    }
  return run(game)  
  }
  