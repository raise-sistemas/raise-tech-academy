export function isRepeatedShot(shot,shots){
  if (shots.find(element => element === shot)){
    return true
  }
  return false
}