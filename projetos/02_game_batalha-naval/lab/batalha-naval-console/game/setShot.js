
import { changeEmoji } from "../utils/changeEmoji.js"
import { isRepeatedCoordinate } from "./start/getShipLib/isRepeatedCoordinate.js"
import { getEnemyShips } from "./getEnemyShips.js"

export function setShot(lastShot,player,players){
  const enemyShips = getEnemyShips(players,player)
  if(lastShot){
    if(isRepeatedCoordinate(lastShot,enemyShips)){
    changeEmoji(player.enemyGrid,'💥',lastShot)
    }
    changeEmoji(player.enemyGrid,'🟦',lastShot)
  }
}