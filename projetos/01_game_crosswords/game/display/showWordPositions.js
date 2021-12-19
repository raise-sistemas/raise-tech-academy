import positionsWords from '../board/positionsWords.js';
import { showMessage } from "../../utils/message.js";
import remainingWords from '../board/remainingWords.js';

export function showWordPositions() {
    let list = [];
    positionsWords.forEach(element => {
        let parts = element.split(' ');
        if (remainingWords.includes(parts[0])) {
            list.push(element);
        }
    });
    showMessage(`\n${list.join('\n')}\n`);
    return true;
}