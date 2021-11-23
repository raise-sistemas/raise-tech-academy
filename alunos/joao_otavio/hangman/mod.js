import { getNewSecretWord } from "./game/getSecretWord.js";
import { checkLetter } from "./game/checkLetter.js";
import { printGame } from "./game/printGame.js";

let stop = false;
do {

    console.log("(!) Você pode digitar 0 a qualquer momento para encerrar o jogo");
    
    const secretWord = getNewSecretWord();
    const word = new Array(secretWord.length);
    word.fill('_');

    let countError = 0;
    const errorsList = [];
    let message = "";

    do {
    
        printGame(word, errorsList, countError, message);
        message = "";
        
        let letter = prompt('Digite uma letra:');
        
        if (letter != null) {
            if (letter != "0") {
                if (checkLetter(letter)) {
                    letter = letter.toUpperCase();
                    if (!word.includes(letter) && !errorsList.includes(letter)) {
                        
                        let haveInWord = false;
                        
                        for (const i in secretWord) {
                            if (letter === secretWord[i]) {
                                word[i] = letter;
                                haveInWord = true;
                            }
                        }
    
                        if (!haveInWord) {
                            countError++;
                            errorsList.push(letter);
                        }
            
                    } else {
                        message = "Esta letra já foi digitada!";
                    }
            
                } else {
                    message = "Letra inválida, tente novamente!";
                }
            
            } else {
                stop = true;
            }
        } else {
            message = "Letra inválida, tente novamente!";
        }
    
    } while(word.includes('_') && countError < 6 && !stop);
    
    if (!stop) {
        
        printGame(word, errorsList, countError, message);
    
        if (countError >= 6) {
            console.log('VOCÊ PERDEU :(');
            console.log(`A palavra era: ${secretWord}`);
        } else {    
            console.log('PARABÉNS, VOCÊ VENCEU!');
        }
    
    } else {
        break;
    }

} while (prompt('Jogar novamente? (sim/nao)').toLowerCase() == "sim");
console.log("Jogo terminado!");
