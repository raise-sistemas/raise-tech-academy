import words from '../../assets/words.js';
import foundWords from '../board/foundWords.js';

export function checkCorrectWord(palavra) {
    if (words.includes(palavra.toLowerCase()) && !foundWords.includes(palavra)) {
        foundWords.push(palavra);
    }
    return foundWords;
}