import { readInputStern, readInputDirection, completeShip, isOverShip } from "./piecesOfGetShip/index.js"

export function getShip(ships,shipSize,prompt){
  
  const stern = readInputStern(ships,prompt)

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