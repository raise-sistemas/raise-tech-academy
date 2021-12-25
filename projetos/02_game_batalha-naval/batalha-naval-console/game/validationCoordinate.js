export function validationCoordinate(coordinate){
  const letter = coordinate[0]
  const space = coordinate[1]
  if(coordinate.length === 3){
    const number = coordinate[2]
    if (!/[1-9]/.test(number)) return true
  }else{
    const number = coordinate.slice(2)
    const [numberOne,numberZero] = number.split("")
    
    if (!/[1]/.test(numberOne)) return true  
    if (!/[0]/.test(numberZero)) return true 
  }
  if(!/[a-j]/.test(letter)) return true
  if(!/\s/.test(space)) return true
  return false
}