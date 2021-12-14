import { letterToNumber } from "../../utils/letterToNumber.js"
import { numberToLetter } from "../../utils/numberToLetter.js"

function readInputCoordinate(prompt) {
  const coordinate = (prompt("Digite a coordenada desejada para o inicio do barco (Ex: a 1): ") || "");
  
  if(!/[a-jA-J] ([1-9]|10)(?!.)/.test(coordinate)) {
    console.log("Entrada inválida");

    return readInputCoordinate(prompt);
  }
  
  return coordinate;
}

function limitDirection(ship,shipTam,direction){
  let [letter, number]=ship[0].split(" ")
  const displacement =shipTam - 1
  number = Number(number)
  letter = letterToNumber(letter)
  
  if ((letter-displacement<0 && direction === 'n')||(letter+displacement > 10 && direction === 's')||(number+displacement>10 && direction === 'l')||(number - displacement < 0 && direction === 'o')){
    return true
  }
  return false
}

function readInputDirection(ship,shipTam,prompt) {
  const direction = (prompt("digite a direção do barco (n (norte↑), s (sul↓), l (leste→) ou o (oeste←)): ") || "").toLowerCase();
  
  if(!/n|s|l|o/.test(direction)||limitDirection(ship,shipTam,direction)) {
    console.log("Entrada inválida");
    return readInputDirection(ship,shipTam,prompt);
  } 
  return direction;

}

function changeCoordinate (letter, number, direction){
  switch (direction) {
    case 'n':
      letter = letterToNumber(letter)
      letter--
      letter = numberToLetter(letter)
      break
    case 's':
      letter = letterToNumber(letter)
      letter++
      letter = numberToLetter(letter)
      break
    case 'l':
      number++
      break
    default:
      number--
      break
    }
    const coordinate = letter + " " + number
    return [coordinate,letter,number]
  }

function completeShip(ship, shipTam, direction){
  let [letter, number]=ship[0].split(" ")
  number = Number(number)
  let coordinate
  for (let i = 1; i < shipTam; i++){
      [coordinate,letter,number] = changeCoordinate(letter, number, direction)
      ship.push(coordinate)
  }
  return ship;
}


export function getShip(ship,prompt){
  
  const shipTam =ship.pop()

  const coordinate = readInputCoordinate(prompt)
  ship.push(coordinate)

  if(ship.lenght<1){
    return ship
  }

  const direction = readInputDirection(ship,shipTam,prompt)
  return completeShip(ship,shipTam,direction)

}