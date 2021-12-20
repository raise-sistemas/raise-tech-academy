import { newPlayer } from "./newPlayer.js"

export function newGame(bot){
  return {
    winner : undefined,
    players : [newPlayer(1), newPlayer(2,bot)]
  } 
}