import words from '../assets/words.js';

export function getWord(index) {
    //const index = Math.round(Math.random() * (words.length-1));
    if (words[index] != null) {
        let palavra = new Object();
        palavra.word = words[index].toUpperCase();
        palavra.position = index;
        palavra.coordenadas = [null, null, null, null];
        return palavra;
    }
    return 'Error: ' + index;
}