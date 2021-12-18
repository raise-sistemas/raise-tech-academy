import words from '../../assets/words.js';
import { showMessage } from "../../utils/message.js";

export function showRemainingWords(foundWords) {
    let remainingWords = [];
    words.forEach(element => {
        if (!foundWords.includes(element.toUpperCase())) remainingWords.push(element.toUpperCase());
    });
    if (remainingWords.length > 0) showMessage(`🟥 Palavras restantes (${remainingWords.length}): ${remainingWords.join(", ")}.`);
    return true;
}