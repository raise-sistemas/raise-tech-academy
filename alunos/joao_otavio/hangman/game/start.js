import { checkLetter } from "./checkLetter.js";
import { showMessage } from "./message.js";
import { getNewSecretWord } from "./getSecretWord.js";
import { printGame } from "./printGame.js";

export let stop = false;
export function startGame() {

    // recuperar palavra secreta
    const secretWord = getNewSecretWord();
    const word = new Array(secretWord.length);
    word.fill('_');

    // configurações iniciais
    let countError = 0;
    const errorsList = [];
    let message = "";
    let firstPlay = true;
    
    do {
        printGame(word, errorsList, countError, message);
        if (firstPlay) {
            showMessage("(!) Você pode digitar 0 a qualquer momento para encerrar o jogo");
            firstPlay = false;
        }
        message = "";
        
        let letter = prompt('Digite uma letra:');

        switch (checkLetter(letter)) {
            case "1":
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
                break;
                
            case "0":
                stop = true;
                break;
                
            default:
                message = checkLetter(letter);
                break;
        }
    
    } while(word.includes('_') && countError < 6 && !stop);
    
    if (!stop) {
        printGame(word, errorsList, countError, message);
        if (countError >= 6) {
            showMessage("VOCÊ PERDEU :(");
            showMessage(`A palavra era: ${secretWord}`);
        } else {   
            showMessage("PARABÉNS, VOCÊ VENCEU!");
        }
    } else {
        return false;
    }

    return true;
}