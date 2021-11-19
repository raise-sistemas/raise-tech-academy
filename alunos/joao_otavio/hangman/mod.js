import { secretWord } from "./game/getSecretWord.js";
import { checkLetter } from "./game/checkLetter.js";
import { printGame } from "./game/printGame.js";

const word = new Array(secretWord.length);
word.fill('_');

let countError = 0;
const errorsList = [];

do{
    printGame(word, errorsList, countError);

    let letra = prompt('Digite uma letra:').toUpperCase();

    if (checkLetter(letra)) {

        if (!word.includes(letra) && !errorsList.includes(letra)) {
            
            let possui = false;
            
            for (const i in secretWord) {
                if (letra === secretWord[i]) {
                    word[i] = letra;
                    possui = true;
                }
            }
            
            if (!possui) {
                countError++;
                if (!errorsList.includes(letra)) {
                    errorsList.push(letra);
                }
            }

        } else {
            console.log('Letra já foi digitada');
        }

    } else {
        console.log('Letra inválida! Tente novamente');
    }

    alert();
    console.clear();

}while(word.includes('_') && countError < 6);

printGame(word, errorsList, countError);

if (countError >= 6) {
    console.log('VOCÊ PERDEU!');
    console.log(`A palavra era: ${secretWord}`);
} else {    
    console.log('PARABÉNS! VOCÊ VENCEU!');
}
