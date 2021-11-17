export const getInput = (gameState) => {
  let input;
  do {
    input = prompt("Digite a Próxima Letra:")
    if(input) input = input.toUpperCase()
  } while(
      !input ||
      !(/[A-Z]/).test(input) || 
      gameState.correct.includes(input) || 
      gameState.wrong.includes(input)
  )
  return [input.charAt(0), gameState]
}
