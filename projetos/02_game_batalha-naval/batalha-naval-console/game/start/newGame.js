import { newPlayer } from "./newPlayer.js"

export function newGame(){
  return {
    winner : 0,
    status : true,
    players : [newPlayer(1), newPlayer(2)]
  } 
}