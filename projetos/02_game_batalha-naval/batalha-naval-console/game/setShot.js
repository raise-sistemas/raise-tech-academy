
import { changeEmoji } from "../utils/changeEmoji.js"
import { isRepeatedCoordinate } from "./start/getShipLib/isRepeatedCoordinate.js"
import { getEnemy } from "./getEnemy.js"

export function setShot(lastShot,player,players){
  const enemyShips = getEnemy(players,player).ships
  if(lastShot){
    if(isRepeatedCoordinate(lastShot,enemyShips)){
    changeEmoji(player.enemyGrid,'💥',lastShot)
    }else{
    changeEmoji(player.enemyGrid,'🟦',lastShot)
    }
  }
}