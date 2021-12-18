import letters from '../assets/letters.js';

export function getLetter() {
    const index = Math.round(Math.random() * (letters.length-1));
    if (letters[index] != null) {
        return letters[index].toUpperCase();
    }
    return 'Error: ' + index;
}