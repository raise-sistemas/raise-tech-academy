import { letterToNumber } from "../../../utils/letterToNumber.js"
import { numberToLetter } from "../../../utils/numberToLetter.js"

export function changeCoordinate (letter, number, direction){
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
