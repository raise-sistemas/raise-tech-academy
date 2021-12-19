import { showMessage } from "../../utils/message.js";
import remainingWords from '../board/remainingWords.js';

export function showRemainingWords() {
    if (remainingWords.length > 0) showMessage(`🟥 Palavras restantes (${remainingWords.length}): ${remainingWords.join(", ")}.`);
    return true;
}