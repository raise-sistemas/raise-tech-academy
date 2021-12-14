import { isRepeatedCoordinate } from "./isRepeatedCoordinate.js"

export function isOverShip(ship, ships){

  for (const coordinate of ship){
    if(isRepeatedCoordinate(coordinate, ships)){
      return true
    }
  }
  
  return false
}
