import names from "../assets/names.js"
import { randomNumber } from "../utils/randomNumber.js"

export function nameInput(){
  return names[randomNumber(names.length-1)]
}
