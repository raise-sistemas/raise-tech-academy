export function isRepeated(element,array){
  if (array.find(component => component === element)){
    return true
  }
  return false
}