import { isRepeated } from "../../isRepeated.js"
export function isRepeatedCoordinate(coordinate, ships){
  for(const ship in ships){
      if(isRepeated(coordinate,ships[ship].coordinates)){
        console.log(`colindido com o barco ${ships[ship].name} na coordenada ${coordinate}`)
        return true
      }
  }
  return false
}