import { limitDirection } from "../game/start/getShipLib/limitDirection.js"
export function possibleDirections(coordinate){
  const directions = ['n','s','l','o']
  const limitedDirections = directions.map((element)=>{
    if(limitDirection(coordinate,2,element)) return element
  })
  return limitedDirections.length
}