export function buildEndView(game){
  const endView =`
  
  parabéns ${game.players[game.winner].name} sua frota de návios
  derrotou completamente a do(a) ${game.players[Number(!game.winner)].name}
  
  `

  return endView
}