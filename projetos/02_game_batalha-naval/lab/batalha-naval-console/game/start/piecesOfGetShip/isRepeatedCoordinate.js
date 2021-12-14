export function isRepeatedCoordinate(coordinate, ships){
  let answer = false;
  for(const ship in ships){
      if(ships[ship].coordinates.find(element => element === coordinate)){
        console.log(`colindido com o barco ${ships[ship].name} na coordenada ${coordinate}`)
        answer = true
      }
  }
  return answer
}