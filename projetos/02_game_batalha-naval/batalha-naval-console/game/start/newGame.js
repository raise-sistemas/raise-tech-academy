import { newPlayer } from "./newPlayer.js"

export function newGame(bot){
  return {
    winner : undefined,
    bot,
    players : [newPlayer(1), newPlayer(2,bot)]
  } 
}