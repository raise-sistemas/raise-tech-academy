import words from '../assets/words.js';

export function getWord(index) {
    if (words[index] != null) {
        let objectWord = new Object();
        objectWord.word = words[index].toUpperCase();
        objectWord.position = index;
        return objectWord;
    }
    return 'Error: ' + index;
}