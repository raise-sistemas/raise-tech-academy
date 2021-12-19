import { changeEmoji } from "../utils/changeEmoji.js"

export function setShot(lastEnemyShot,ships,grid) {
  for(const ship in ships){

      if(ships[ship].coordinates.find(element => element === lastEnemyShot)){
        ships[ship].coordinates.splice(ships[ship].coordinates.indexOf(lastEnemyShot),1)
        changeEmoji(grid,'💥',lastEnemyShot)
      }

    }

  return ships
}