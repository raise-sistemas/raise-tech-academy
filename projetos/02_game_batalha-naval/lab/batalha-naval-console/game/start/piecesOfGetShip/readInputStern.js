import { isRepeatedCoordinate } from "./isRepeatedCoordinate.js"

export function readInputStern(ships, prompt) {
  const coordinate = (prompt("Digite a coordenada desejada para a popa do barco (Ex: a 1): ") || "");
  
  if(!/[a-jA-J] ([1-9]|10)(?!.)/.test(coordinate)||isRepeatedCoordinate(coordinate, ships)) {
    console.log("Entrada inválida");

    return readInputStern(ships, prompt);
  }
  
  return coordinate;
}