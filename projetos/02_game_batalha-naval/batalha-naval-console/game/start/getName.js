import { nameInput } from "../../bot/botInputs/index.js"

export function getName(playerNumber,prompt,bot=false){
  console.clear()

  if(bot) return nameInput()
  
  return prompt(`jogador ${playerNumber++} digite o seu nome`)
}