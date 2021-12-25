import { limitDirection } from "./start/getShipLib/limitDirection.js"
import { botIntelligent } from "../bot/botInputs/botIntelligent.js"
import { validationCoordinate } from "./validationCoordinate.js"

export function readInputBotShot(isRepeatedShot, shots, bot){
  const coordinate = botIntelligent(bot);
  
  if(isRepeatedShot(coordinate,shots)) {
    return readInputBotShot(isRepeatedShot, shots, bot) ;
  }
  
  return coordinate;
}

export function readInputCoordinate(callback,analyze,prompt) {
  const coordinate = (prompt("Digite a coordenada desejada (Ex: a 1): ") || "").toLowerCase();
  
  if(callback(coordinate,analyze)||validationCoordinate(coordinate)) {
    console.log("Entrada inválida");
    return readInputCoordinate(callback,analyze,prompt) ;
  }
  
  return coordinate;
}


export function readInputDirection(ship, shipSize, prompt) {
  const direction = (prompt("digite a direção do barco (n (norte↑), s (sul↓), l (leste→) ou o (oeste←)): ") || "").toLowerCase()
  
  if(!/n|s|l|o/.test(direction)||limitDirection(ship, shipSize, direction)||direction.length>1) {
    console.log("Entrada inválida");
    return readInputDirection(ship, shipSize, prompt);
  } 
  return direction;

}


