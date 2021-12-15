export function getEnemyShips(players,player){
  return players[Number(!players.indexOf(player))].ships
}