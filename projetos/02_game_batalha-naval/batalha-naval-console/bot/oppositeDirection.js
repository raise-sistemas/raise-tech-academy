export function oppositeDirection(direction){
  switch (direction) {
    case 'n':
      return 's'
    case 's':
      return 'n'
    case 'l':
      return 'o'
    default:
      return 'l'
    }
}