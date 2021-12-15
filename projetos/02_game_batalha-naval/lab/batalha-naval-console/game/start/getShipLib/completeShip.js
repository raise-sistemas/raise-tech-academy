import { letterToNumber } from "../../../utils/letterToNumber.js"
import { numberToLetter } from "../../../utils/numberToLetter.js"

function changeCoordinate (letter, number, direction){
  switch (direction) {
    case 'n':
      number--
      break
    case 's':
      number++
      break
    case 'l':
      letter = letterToNumber(letter)
      letter++
      letter = numberToLetter(letter)
      break
    default:
      letter = letterToNumber(letter)
      letter--
      letter = numberToLetter(letter)
      break
    }
    const coordinate = letter + " " + number
    return [coordinate,letter,number]
  }


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