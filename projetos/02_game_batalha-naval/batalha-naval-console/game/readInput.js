import { isRepeatedCoordinate } from "./start/getShipLib/isRepeatedCoordinate.js"
import { limitDirection } from "./start/getShipLib/limitDirection.js"


export function readInputCoordinate(prompt) {
  const coordinate = (prompt("Digite a coordenada desejada para o tiro (Ex: a 1): ") || "");
  const regExp = /([a-jA-J]\s[1-9]|10)/

  if(!regExp.test(coordinate)) {
    console.log("Entrada inválida");

    return readInputCoordinate(prompt);
  }
  
  return coordinate.match(regExp)[1];
}

export function readInputStern(ships, prompt) {
  const coordinate = readInputCoordinate(prompt)
  if(isRepeatedCoordinate(coordinate, ships)) {
    return readInputStern(ships, prompt);
  }
  return coordinate
}

export function readInputDirection(ship, shipSize, prompt) {
  const direction = (prompt("digite a direção do barco (n (norte↑), s (sul↓), l (leste→) ou o (oeste←)): ") || "").toLowerCase()
  
  if(!/n|s|l|o/.test(direction)||limitDirection(ship, shipSize, direction)) {
    console.log("Entrada inválida");
    return readInputDirection(ship, shipSize, prompt);
  } 
  return direction;

}


