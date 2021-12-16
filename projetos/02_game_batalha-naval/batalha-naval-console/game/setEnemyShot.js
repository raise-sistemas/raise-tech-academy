import { changeEmoji } from "../utils/changeEmoji.js"

export function setEnemyShot(lastEnemyShot,ships,grid) {
  const shipsClone = structuredClone(ships)

  if(lastEnemyShot){

  for(const ship in shipsClone){

      if(shipsClone[ship].coordinates.find(element => element === lastEnemyShot)){
        shipsClone[ship].coordinates.splice(shipsClone[ship].coordinates.indexOf(lastEnemyShot),1)
        changeEmoji(grid,'💥',lastEnemyShot)
      }

    }
  }

  return shipsClone
}