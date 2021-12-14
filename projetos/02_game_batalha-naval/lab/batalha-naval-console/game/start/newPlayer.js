import {initGrid} from "./initGrid.js"


export function newPlayer() { 
  const player ={
    grid: initGrid('🟦'),
    enemyGrid: initGrid('⬛️'),
    status: "playing",
    ships:{
      aircraftCarriers : [5],  //5 
      battleships : [4],       //4  
      Cruisers : [3],          //3  
      Destroyers : [2],        //2  
      Submarines : [1]                  //1  
    }
  }
  return player
}