import { completeShip, isOverShip } from "./getShipLib/index.js"
import { readInputDirection, readInputCoordinate } from "../readInput.js"
import { isRepeatedCoordinate } from "./getShipLib/isRepeatedCoordinate.js"
import { coordinateInput, directionInput } from "../../bot/index.js"

export function getShip(player, shipSize, prompt){
  let stern
  if(player.bot){
    stern = readInputCoordinate (isRepeatedCoordinate,player.ships,coordinateInput,true)
  }else{
    stern = readInputCoordinate (isRepeatedCoordinate,player.ships,prompt)
  }

    if(shipSize === 1){
    return [stern]
  }

  let direction
  let ship
  
  do{
    if(player.bot){
      direction = readInputDirection(stern,shipSize,directionInput)
    }else{
      direction = readInputDirection(stern,shipSize,prompt)
    }
    
    ship = completeShip(stern, shipSize, direction)
  }while(isOverShip(ship, player.ships, direction))

  return ship
}