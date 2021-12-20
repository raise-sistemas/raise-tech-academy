import { limitDirection } from "./start/getShipLib/limitDirection.js"


export function readInputCoordinate(callback,analyze,prompt) {
  const coordinate = (prompt("Digite a coordenada desejada (Ex: a 1): ") || "").toLowerCase();
  const regExp = /^[a-j]\s[1-9]||10(?!.)/
  
  if(!regExp.test(coordinate)||callback(coordinate,analyze)) {
    console.log("Entrada inválida");
    return readInputCoordinate(callback,analyze,prompt) ;
  }
  
  return coordinate;
}


export function readInputDirection(ship, shipSize, prompt) {
  const direction = (prompt("digite a direção do barco (n (norte↑), s (sul↓), l (leste→) ou o (oeste←)): ") || "").toLowerCase()
  
  if(!/n|s|l|o/.test(direction)||limitDirection(ship, shipSize, direction)) {
    console.log("Entrada inválida");
    return readInputDirection(ship, shipSize, prompt);
  } 
  return direction[0];

}


