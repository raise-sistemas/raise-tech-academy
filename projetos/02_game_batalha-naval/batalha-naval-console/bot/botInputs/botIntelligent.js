import { changeCoordinate } from "../../utils/changeCoordinate.js"
import { readInputDirection } from "../../game/readInput.js"
import { isRepeated } from "../../game/isRepeated.js"
import { coordinateInput, directionInput } from "./index.js"
import { analizeDirection, oppositeDirection, possibleDirections } from "../index.js"


export function botIntelligent(bot){
  
  if(!bot.enemyShip.length){
    return coordinateInput()
  }
  let lastShot = bot.enemyShip[bot.enemyShip.length-1]
  
  if (bot.enemyShip.length === 1){
    if (bot.directions.length === possibleDirections(lastShot)){
      bot.enemyShip=[]
      bot.directions=[]
      return coordinateInput()
    }
    const direction = readInputDirection(lastShot,2,directionInput)
    if(isRepeated(direction,bot.directions)){
      return botIntelligent(bot)
    }
    return changeCoordinate(lastShot,direction)
  }
  let direction = analizeDirection(bot.enemyShip)
  if (bot.directions.length !== 0){
    lastShot = bot.enemyShip[0]
    bot.enemyShip=[]
    bot.directions=[]
    direction = oppositeDirection(direction)
  }
  return changeCoordinate(lastShot,direction)
}
