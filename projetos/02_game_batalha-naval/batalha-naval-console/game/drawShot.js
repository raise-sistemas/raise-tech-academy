
import { changeEmoji } from "../utils/changeEmoji.js"
import { isRepeatedCoordinate } from "./start/getShipLib/isRepeatedCoordinate.js"

export function drawShot(lastShot,player,enemyShips){
    if(isRepeatedCoordinate(lastShot,enemyShips)){
      changeEmoji(player.enemyGrid,'💥',lastShot)
    }else{
      changeEmoji(player.enemyGrid,'🟦',lastShot)
    }
}