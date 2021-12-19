import { completeShip, isOverShip } from "./getShipLib/index.js"
import { readInputDirection, readInputCoordinate } from "../readInput.js"
import { isRepeatedCoordinate } from "./getShipLib/isRepeatedCoordinate.js"

export function getShip(ships, shipSize, prompt){
  
  const stern = readInputCoordinate (prompt,isRepeatedCoordinate,ships)
  if(shipSize === 1){
    return [stern]
  }

  let direction
  let ship
  do{
    direction = readInputDirection(stern,shipSize,prompt)
    ship = completeShip(stern, shipSize, direction)
  }while(isOverShip(ship, ships, direction))

  return ship
}