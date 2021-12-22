import { isRepeatedCoordinate } from "../game/start/getShipLib/isRepeatedCoordinate.js"
import { analizeDirection } from "./analizeDirection.js"

export function setBotMemory(bot,shot,enemyShips){
  if(isRepeatedCoordinate(shot,enemyShips)){
    bot.enemyShip.push(shot)
    bot.directions = []
  }else{
    if(bot.enemyShip.length){
      bot.directions.push(analizeDirection([bot.enemyShip[bot.enemyShip.length-1],shot]))
    }
  }
}