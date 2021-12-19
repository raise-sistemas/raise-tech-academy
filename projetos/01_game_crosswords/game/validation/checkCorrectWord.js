import words from '../../assets/words.js';
import foundWords from '../board/foundWords.js';
import remainingWords from '../board/remainingWords.js';

export function checkCorrectWord(palavra) {
    if (words.includes(palavra.toLowerCase()) && !foundWords.includes(palavra)) {
        foundWords.push(palavra);
        for(let posWord in remainingWords) {
            if (remainingWords[posWord] === palavra) {
                remainingWords.splice(posWord, 1);
            }
        }
    }
    return foundWords;
}