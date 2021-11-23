import words from '../assets/words.js';

export function getNewSecretWord() {
    const index = Math.round(Math.random() * words.length);
    return words[index].toUpperCase().replace(/[^a-zA-Zs]/g, "");
}
