import { randomNumber } from "../utils/randomNumber.js"

export function directionInput(x){
  const direction = randomNumber(3)+1
  switch(direction){
    case 1:
      return 'n'
    case 2:
      return 's'
    case 3:
      return 'l'
    case 4:
      return 'o'
  }
}