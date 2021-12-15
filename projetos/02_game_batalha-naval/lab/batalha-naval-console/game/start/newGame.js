import { newPlayer } from "./newPlayer.js"

export function newGame(){
  return {
    gameStatus : true,
    players : [newPlayer(),newPlayer()]
  } 
}