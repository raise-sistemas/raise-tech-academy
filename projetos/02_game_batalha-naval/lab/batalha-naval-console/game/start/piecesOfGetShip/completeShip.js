import { changeCoordinate } from "./changeCoordinate.js"

export function completeShip(stern, shipSize, direction){
  const ship = [stern]
  let [letter, number]=stern.split(" ")
  number = Number(number)
  let coordinate
  for (let i = 1; i < shipSize; i++){
      [coordinate, letter, number] = changeCoordinate(letter, number, direction)
      ship.push(coordinate)
  }
  return ship;
}