import words from '../assets/words.js';
import { showMessage } from "../utils/message.js";
import { showRemainingWords } from "./showRemainingWords.js";

export function checkCorrectWord(palavra, foundWords) {
    if (words.includes(palavra.toLowerCase()) && !foundWords.includes(palavra)) {
        foundWords.push(palavra);
    } else {
        showMessage('Ops.. palavra incorreta!');
    }
    if (foundWords.length > 0) showMessage(`Palavras encontradas (${foundWords.length}): ${foundWords.join(", ")}.`);
    showRemainingWords(foundWords);
    if (foundWords.length === words.length-1) showMessage('Mais uma palavra.. e você vence o jogo!');
    return foundWords;
}