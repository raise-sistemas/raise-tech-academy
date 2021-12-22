import { changeCoordinate } from "../../../utils/changeCoordinate.js"

export function completeShip(stern, shipSize, direction){
  const ship = [stern]
  
  let coordinate = stern
  for (let i = 1; i < shipSize; i++){
      coordinate = changeCoordinate(coordinate, direction)
      ship.push(coordinate)
  }
  return ship;
}