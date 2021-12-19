import foundWords from './board/foundWords.js';
import remainingWords from './board/remainingWords.js';
import fullPositions from './board/fullPositions.js';
import positionsWords from './board/positionsWords.js';

export function clearWords() {
    foundWords.splice(0,foundWords.length);
    remainingWords.splice(0,remainingWords.length);
    fullPositions.splice(0,fullPositions.length);
    positionsWords.splice(0,positionsWords.length);
    return true;
}