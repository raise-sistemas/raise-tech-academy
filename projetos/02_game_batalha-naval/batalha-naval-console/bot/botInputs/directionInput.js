import { randomNumber } from "../../utils/randomNumber.js"

export function directionInput(){
  const directions = ['n','s','l','o']
  const index = randomNumber(4)
  return directions[index]
}