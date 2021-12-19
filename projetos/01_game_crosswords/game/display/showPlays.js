import { showRemainingWords } from "./showRemainingWords.js";
import { showMessage } from "../../utils/message.js";
import foundWords from '../board/foundWords.js';
import remainingWords from '../board/remainingWords.js';

export function showPlays() {
    if (foundWords.length > 0) showMessage(`🟩 Palavras encontradas (${foundWords.length}): ${foundWords.join(", ")}.`);
    showRemainingWords();
    if (remainingWords.length === 1) showMessage('Apenas mais uma palavra.. e você vence o jogo!');
    return true;
}