import words from '../../assets/words.js';

export function checkCorrectWord(palavra, foundWords) {
    if (words.includes(palavra.toLowerCase()) && !foundWords.includes(palavra)) {
        foundWords.push(palavra);
    }
    return foundWords;
}