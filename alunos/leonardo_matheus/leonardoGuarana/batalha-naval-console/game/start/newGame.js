import { newPlayer } from "./newPlayer.js"

export function newGame(){
  return {
    playerOne : newPlayer(),
    playerTwo : newPlayer()
  }
}