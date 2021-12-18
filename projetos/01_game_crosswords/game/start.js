import { matrizSettings } from "./board/modify/matriz.js";
import { showMessage } from "../utils/message.js";
import { displayBoard } from "./display/displayBoard.js";
import { searchWord } from "./validation/searchWord.js";
import { checkCorrectWord } from "./validation/checkCorrectWord.js";
import { modifyBoard } from "./board/modify/modifyBoard.js";
import { showPlays } from "./display/showPlays.js";
import { validateInput } from "./validation/validateInput.js";
import words from '../assets/words.js';
import board from '../assets/boards/board-json.js';

export let stop = false;
export function startGame() {
    
    let matriz = matrizSettings();
    displayBoard(matriz);
    showMessage('🟨 Você pode digitar 0 a qualquer momento para sair do jogo.');
    showMessage(`🟥 Palavras restantes (${words.length}): ${words.join(", ").toUpperCase()}.`);

    let foundWords = [];
    do {
        let input = prompt('Digite a coluna e linha do início e fim da palavra:');
        if (input === '0') return false; // encerrar o programa
        if (validateInput(input)) {
            let wordPositions = input.match(/[a-z]+|[^a-z]+/gi);
            let word = searchWord(wordPositions, matriz);
            let amountWordsFound = foundWords.length;
            foundWords = checkCorrectWord(word, foundWords);
            if (foundWords.length > amountWordsFound) matriz = modifyBoard(matriz, wordPositions);
            displayBoard(matriz);
            if (foundWords.length === amountWordsFound) showMessage('❌ Ops.. palavra incorreta!');
            showPlays(foundWords);
        } else {
            displayBoard(matriz);
            showMessage('❌ Entrada inválida! Exemplos válidos: B3D3, E4E8, b3d3.');
            showPlays(foundWords);
        }
    } while (foundWords.length < words.length);

    if (foundWords.length === words.length) showMessage('Parabéns, você venceu !!!');

    return true;
}