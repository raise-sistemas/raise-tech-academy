import { limitDirection } from "./limitDirection.js"

export function readInputDirection(ship, shipSize, prompt) {
  const direction = (prompt("digite a direção do barco (n (norte↑), s (sul↓), l (leste→) ou o (oeste←)): ") || "").toLowerCase();
  
  if(!/n|s|l|o/.test(direction)||limitDirection(ship, shipSize, direction)) {
    console.log("Entrada inválida");
    return readInputDirection(ship, shipSize, prompt);
  } 
  return direction;

}