import letters from '../assets/letters.js';
import words from '../assets/words.js';

export function getLetter() {
    const index = Math.round(Math.random() * (letters.length-1));
    if (letters[index] != null) {
        return letters[index].toUpperCase();
    }
    return 'Error: ' + index;
}

export function getWord(index) {
    if (words[index] != null) {
        let palavra = new Object();
        palavra.word = words[index].toUpperCase();
        palavra.position = index;
        palavra.coordenadas = [null, null, null, null];
        return palavra;
    }
    return 'Error: ' + index;
}

export function removeWord(position) {
    words.splice(position, 1);
}
