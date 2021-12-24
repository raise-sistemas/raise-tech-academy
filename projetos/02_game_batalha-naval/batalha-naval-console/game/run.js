import { changePlayerView, view} from "../display/index.js"
import { isRepeatedCoordinate } from "./start/getShipLib/isRepeatedCoordinate.js"
import { readInputCoordinate, readInputBotShot } from "./readInput.js"
import { setShot, drawShot, getEnemy, isRepeated, isWinner  } from "./index.js"
import { setBotMemory } from "../bot/setBotMemory.js"


export function run(game,player){
  const enemy = getEnemy(game.players,player)
  let shot 
  if (player.bot){
    shot = readInputBotShot(isRepeated,player.shots,player.bot)
    setBotMemory(player.bot,shot,enemy.ships)

  }else{
    view(player)
    
    shot = readInputCoordinate(isRepeated,player.shots,prompt)
  }
  const isHit = isRepeatedCoordinate(shot,enemy.ships)
  drawShot(shot,player,enemy.ships)
  enemy.ships = setShot(shot,enemy.ships,enemy.grid)
  player.shots.push(shot)
  if(isWinner(enemy.ships)){
  game.winner = game.players.indexOf(player)
  return    
  }
  if(isHit){
    return run(game,player)
  } 
  if(!game.bot){
    changePlayerView(enemy)
  }
  return run(game,enemy)  
  }
  