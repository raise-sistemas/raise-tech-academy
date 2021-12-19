import words from '../assets/words.js';

export function getWord(index) {
    if (words[index] != null) {
        let objectWord = new Object();
        objectWord.word = words[index].toUpperCase();
        objectWord.position = index;
        objectWord.coordenadas = [null, null, null, null];
        return objectWord;
    }
    return 'Error: ' + index;
}