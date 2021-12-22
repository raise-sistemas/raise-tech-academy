export function newBot(bot){
  if (!bot) return false
  return {
    enemyShip:[],
    directions:[]
  }
}