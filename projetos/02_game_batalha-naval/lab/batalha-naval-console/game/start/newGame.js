import { newPlayer } from "./newPlayer.js"

export function newGame(){
  return {
    status : true,
    players : [newPlayer(),newPlayer()]
  } 
}