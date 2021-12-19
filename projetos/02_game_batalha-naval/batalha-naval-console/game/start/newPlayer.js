import { initGrid } from "./initGrid.js"
import { newBoat } from "./newBoat.js"
import { setName } from "./setName.js"

export function newPlayer(playerNumber) { 
  return {
    grid: initGrid('🟦'),
    enemyGrid: initGrid('⬛️'),
    name : setName(playerNumber,prompt),
    ships:{
      aircraftCarriers :newBoat(`porta-aviões`,5),
      battleships : newBoat(`Couraçado`,4),       //4  
      Cruisers : newBoat(`Cruzador`,3),          //3  
      Destroyers : newBoat(`Contratorpedeiro`,2),        //2  
      Submarines : newBoat(`Submarino`,1)                  //1  
    },
    shots:[]
  }
 
}