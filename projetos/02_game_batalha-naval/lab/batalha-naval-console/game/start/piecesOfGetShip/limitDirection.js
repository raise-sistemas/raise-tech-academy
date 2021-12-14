import { letterToNumber } from "../../../utils/letterToNumber.js"

export function limitDirection(stern,shipSize,direction){
  let [letter, number]=stern.split(" ")
  const displacement =shipSize - 1
  number = Number(number)
  letter = letterToNumber(letter)
  
  if ((letter - displacement < 0 && direction === 'n')||(letter + displacement > 10 && direction === 's')||(number + displacement > 10 && direction === 'l')||(number - displacement < 0 && direction === 'o')){
    return true
  }
  return false
}