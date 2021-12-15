import { letterToNumber } from "../utils/letterToNumber.js"
import { isRepeatedCoordinate } from "./start/getShipLib/isRepeatedCoordinate.js"

function limitDirection(stern,shipSize,direction){
  let [letter, number]=stern.split(" ")
  const displacement =shipSize - 1
  number = Number(number)
  letter = letterToNumber(letter)
  
  if ((letter - displacement < 1 && direction === 'o')||(letter + displacement > 10 && direction === 'l')||(number + displacement > 10 && direction === 's')||(number - displacement < 1 && direction === 'n')){
    return true
  }
  return false
}

export function readInputStern(ships, prompt) {
  const coordinate = (prompt("Digite a coordenada desejada para a popa do barco (Ex: a 1): ") || "");
  
  if(!/[a-jA-J] ([1-9]|10)(?!.)/.test(coordinate)||isRepeatedCoordinate(coordinate, ships)) {
    console.log("Entrada inválida");

    return readInputStern(ships, prompt);
  }
  
  return coordinate;
}

export function readInputDirection(ship, shipSize, prompt) {
  const direction = (prompt("digite a direção do barco (n (norte↑), s (sul↓), l (leste→) ou o (oeste←)): ") || "").toLowerCase();
  
  if(!/n|s|l|o/.test(direction)||limitDirection(ship, shipSize, direction)) {
    console.log("Entrada inválida");
    return readInputDirection(ship, shipSize, prompt);
  } 
  return direction;

}
export function readInputShot(prompt) {
  const coordinate = (prompt("Digite a coordenada desejada para o tiro (Ex: a 1): ") || "");
  
  if(!/[a-jA-J] ([1-9]|10)(?!.)/.test(coordinate)) {
    console.log("Entrada inválida");

    return readInputShot(prompt);
  }
  
  return coordinate;
}
