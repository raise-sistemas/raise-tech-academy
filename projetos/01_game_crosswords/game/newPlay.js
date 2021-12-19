import foundWords from './board/foundWords.js';
import { showMessage } from "../utils/message.js";
import { showPlays } from "./display/showPlays.js";
import { searchWord } from "./validation/searchWord.js";
import { displayBoard } from "./display/displayBoard.js";
import { modifyBoard } from "./board/modify/modifyBoard.js";
import { checkCorrectWord } from "./validation/checkCorrectWord.js";

export function newPlay(input, matriz) {
    let wordPositions = input.match(/[a-z]+|[^a-z]+/gi);
    let word = searchWord(wordPositions, matriz);
    let amountWordsFound = foundWords.length;
    checkCorrectWord(word);
    if (foundWords.length > amountWordsFound) matriz = modifyBoard(matriz, wordPositions);
    displayBoard(matriz);
    if (foundWords.length === amountWordsFound) showMessage('❌ Ops.. palavra incorreta!');
    showPlays();
    return matriz;
}