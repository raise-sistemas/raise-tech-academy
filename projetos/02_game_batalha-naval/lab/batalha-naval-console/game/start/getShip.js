import { letterToNumber } from "../../utils/letterToNumber.js"
import { numberToLetter } from "../../utils/numberToLetter.js"

function isRepeateCoordinate(coordinate, ships){
  let answer = false;
  for(const ship in ships){
      if(ships[ship].find(element => element == coordinate)){
        console.log(`colindido com o barco ${ship}`)
        answer = true
      }
  }
  return answer
}

function readInputCoordinate(ships, prompt) {
  const coordinate = (prompt("Digite a coordenada desejada para o inicio do barco (Ex: a 1): ") || "");
  
  if(!/[a-jA-J] ([1-9]|10)(?!.)/.test(coordinate)||isRepeateCoordinate(coordinate, ships)) {
    console.log("Entrada inválida");

    return readInputCoordinate(ships, prompt);
  }
  
  return coordinate;
}

function limitDirection(ship,shipTam,direction){
  let [letter, number]=ship[0].split(" ")
  const displacement =shipTam - 1
  number = Number(number)
  letter = letterToNumber(letter)
  
  if ((letter - displacement < 0 && direction === 'n')||(letter + displacement > 10 && direction === 's')||(number + displacement > 10 && direction === 'l')||(number - displacement < 0 && direction === 'o')){
    return true
  }
  return false
}

function isOverShip(ship, ships, direction){

  for (const coordinate of ship){
    if(isRepeateCoordinate(coordinate, ships)){
      console.log(`colidindo na coordenada ${coordinate}`)
      return true
    }
  }
  
  return false
}

function readInputDirection(ship, shipTam, prompt) {
  const direction = (prompt("digite a direção do barco (n (norte↑), s (sul↓), l (leste→) ou o (oeste←)): ") || "").toLowerCase();
  
  if(!/n|s|l|o/.test(direction)||limitDirection(ship, shipTam, direction)) {
    console.log("Entrada inválida");
    return readInputDirection(ship, shipTam, prompt);
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
      [coordinate, letter, number] = changeCoordinate(letter, number, direction)
      ship.push(coordinate)
  }
  return ship;
}


export function getShip(ships,ship,prompt){
  
  let shipClone = self.structuredClone(ship)
  const shipTam = shipClone.pop()

  const coordinate = readInputCoordinate(ships,prompt)
  shipClone.push(coordinate)

  if(shipTam === 1){
    return shipClone
  }

  let direction = false
  do{
    direction = readInputDirection(shipClone,shipTam,prompt)
    shipClone = completeShip(shipClone, shipTam, direction)
  }while(isOverShip(shipClone, ships, direction))

  return shipClone
}