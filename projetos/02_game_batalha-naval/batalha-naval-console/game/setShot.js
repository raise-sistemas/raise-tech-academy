import { changeEmoji } from "../utils/changeEmoji.js"

export function setShot(shot,ships,grid) {
  for(const ship in ships){

      if(ships[ship].coordinates.find(element => element === shot)){
        ships[ship].coordinates.splice(ships[ship].coordinates.indexOf(shot),1)
        changeEmoji(grid,'💥',shot)
      }

    }

  return ships
}