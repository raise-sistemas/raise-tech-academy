import { letterToNumber } from "./letterToNumber.js"
export function changeEmoji(grid,emoji,coordinate){
  const [letter,number] = coordinate.split(" ")
  grid [number] [letterToNumber(letter)] = emoji;
  return grid
}