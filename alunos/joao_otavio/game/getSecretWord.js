import words from '../words.js';

const index = Math.round(Math.random() * words.length);
export const  secretWord = words[index].toUpperCase();
