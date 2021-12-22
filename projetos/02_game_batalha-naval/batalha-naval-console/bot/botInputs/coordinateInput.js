import { randomNumber } from "../../utils/randomNumber.js"
import { numberToLetter } from "../../utils/numberToLetter.js"

export function coordinateInput(){
  const letter = numberToLetter(randomNumber(9)+1)
  const number = randomNumber(9)+1
  return letter + ' ' + number
}