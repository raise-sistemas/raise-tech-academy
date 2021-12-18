import { showRemainingWords } from "./showRemainingWords.js";
import { showMessage } from "../../utils/message.js";
import words from '../../assets/words.js';

export function showPlays(foundWords) {
    if (foundWords.length > 0) showMessage(`🟩 Palavras encontradas (${foundWords.length}): ${foundWords.join(", ")}.`);
    showRemainingWords(foundWords);
    if (foundWords.length === words.length-1) showMessage('Apenas mais uma palavra.. e você vence o jogo!');
    return true;
}