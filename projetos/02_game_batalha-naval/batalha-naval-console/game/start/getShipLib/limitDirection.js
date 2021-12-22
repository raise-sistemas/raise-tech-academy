import { letterToNumber } from "../../../utils/letterToNumber.js"

export function limitDirection(stern,shipSize,direction){
  let [letter, number]=stern.split(" ")
  const displacement =shipSize
  number = Number(number)
  letter = letterToNumber(letter)
  
  if ((number - displacement < 0 && direction === 'n')||(number + displacement > 10 && direction === 's')||(letter + displacement > 10 && direction === 'l')||(letter - displacement < 0 && direction === 'o')){
    return true
  }
  return false
}