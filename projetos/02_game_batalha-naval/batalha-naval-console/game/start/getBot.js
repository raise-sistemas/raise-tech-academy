export function getBot(){
  const bot = prompt('Você deseja jogar contra um robo? (s = sim, n = não)')
  const regExp =/^s||n(?!.)/ 

  if(!regExp.test(bot)){
    console.log('Entrada inválida')
    return getBot()
  }

  return bot === 's' 
}