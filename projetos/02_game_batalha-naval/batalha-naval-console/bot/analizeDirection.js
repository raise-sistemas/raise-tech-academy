import { letterToNumber } from "../utils/letterToNumber.js"
export function analizeDirection(enemyShip){
  let [ firstLetter, firstNumber ] = enemyShip[0].split(" ")
  let [ secondLetter, secondNumber ] = enemyShip[1].split(" ")
  firstNumber = Number(firstNumber)
  secondNumber = Number(secondNumber)
  if (firstNumber === secondNumber){
    if (firstLetter < secondLetter){
      return 'l'
    }
    return 'o'
  }
  firstLetter = letterToNumber(firstLetter)
  secondLetter = letterToNumber(secondLetter)
  if(firstNumber < secondNumber){
    return 's'
  }
  return 'n'
  
}