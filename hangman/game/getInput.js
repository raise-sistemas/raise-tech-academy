export const getInput = (gameState, getEntry) => {
  let input;
  do {
    input = getEntry("Digite a Próxima Letra:")
    if(input) input = input.toUpperCase()
  } while(
      !input ||
      !(/[A-Z\u00C0-\u00FF-]+/i).test(input) || 
      gameState.correct.includes(input) || 
      gameState.wrong.includes(input)
  )
  return [input.charAt(0), gameState]
}
