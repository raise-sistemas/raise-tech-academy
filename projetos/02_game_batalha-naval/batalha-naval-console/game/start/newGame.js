import { newPlayer } from "./newPlayer.js"

export function newGame(){
  return {
    winner : undefined,
    players : [newPlayer(1), newPlayer(2)]
  } 
}