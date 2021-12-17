import { matrizSettings } from "./matriz.js";
import { showMessage } from "../utils/message.js";
import { displayBoard } from "./displayBoard.js";
import { searchWord } from "./searchWord.js";
import { checkCorrectWord } from "./checkCorrectWord.js";
import board from '../board-static/board-json.js';
import words from '../assets/words.js';

export let stop = false;
export function startGame() {

    let staticBoard = true;
    let matriz = matrizSettings(staticBoard);
    displayBoard(matriz);
    showMessage(`Palavras restantes (${words.length}): ${words.join(", ").toUpperCase()}.`);

    let foundWords = [];
    do {
        let input = prompt('Digite a coluna e linha do início e fim da palavra:');
        if (input === '0') return false; // encerrar o programa
        let word = searchWord(input.match(/[a-z]+|[^a-z]+/gi), matriz);
        displayBoard(matriz);
        foundWords = checkCorrectWord(word, foundWords);
    } while (foundWords.length < words.length);

    if (foundWords.length === words.length) showMessage('Parabéns, você venceu!');

    return true;
}