export function getEnemy(players,player){
  return players[Number(!players.indexOf(player))]
}