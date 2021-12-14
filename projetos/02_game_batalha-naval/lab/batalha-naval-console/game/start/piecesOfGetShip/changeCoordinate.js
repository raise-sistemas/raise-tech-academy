import { letterToNumber } from "../../../utils/letterToNumber.js"
import { numberToLetter } from "../../../utils/numberToLetter.js"

export function changeCoordinate (letter, number, direction){
  switch (direction) {
    case 'n':
      letter = letterToNumber(letter)
      letter--
      letter = numberToLetter(letter)
      break
    case 's':
      letter = letterToNumber(letter)
      letter++
      letter = numberToLetter(letter)
      break
    case 'l':
      number++
      break
    default:
      number--
      break
    }
    const coordinate = letter + " " + number
    return [coordinate,letter,number]
  }
