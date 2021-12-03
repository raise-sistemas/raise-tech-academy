function readInputChar(prompt) {
  const char = (prompt("Digite a Próxima Letra:") || "").toUpperCase().charAt(0);
  
  if(!/[A-Z\u00C0-\u00FF-]/.test(char)) {
    console.log("Entrada inválida");

    return readInputChar(prompt);
  }
  
  return char;
}

export function getInput(prompt, correct, wrong) {
  const input =  readInputChar(prompt);
  
  if(correct.includes(input) || wrong.includes(input)) {
    console.log(`Letra ${input} já escolhida`);
    
    return getInput(prompt, correct, wrong);
  } 
  return input;
}
