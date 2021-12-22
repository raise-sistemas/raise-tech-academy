import { letterToNumber } from "./letterToNumber.js"
import { numberToLetter } from "./numberToLetter.js"

export function changeCoordinate (coordinate, direction){
  let [letter, number]=coordinate.split(" ")
  number = Number(number)
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
    const newCoordinate = letter + " " + number
    return newCoordinate
  }