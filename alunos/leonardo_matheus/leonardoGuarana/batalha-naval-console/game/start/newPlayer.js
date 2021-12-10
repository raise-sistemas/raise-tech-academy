import {initGrid} from "./initGrid.js"


export function newPlayer() { 
  const player ={
    grid: initGrid('🟦'),
    enemyGrid: initGrid('⬛️'),
    status: "playing",
    aircraftCarriers : new Array(5),  //5 
    battleships : new Array(4),        //4  
    Cruisers : new Array(3),          //3  
    Destroyers : new Array(2),        //2  
    Submarines : ''        //1  
  }
  return player
}