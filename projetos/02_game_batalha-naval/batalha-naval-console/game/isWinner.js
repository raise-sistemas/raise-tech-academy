export function isWinner(ships){
  for (const ship in ships){
    if(ships[ship].coordinates.length){
      return false
    }
  }
  return true
}