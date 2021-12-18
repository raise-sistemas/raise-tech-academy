import { styleFoundWord } from '../boardSettings/styleFoundWords.js';

export function displayBoard(matriz) {
    console.clear();
    console.log(' -----------------------------');
    console.log('|=-=-=-=-%cCAÇA-PALAVRAS%c-=-=-=-=|', 'color: red', '');
    console.log(' -----------------------------');
    let strBoard = (matriz.join("\n")).toString().replace(/,/g, '  ');
    let numberMarkedLetters = strBoard.includes("%c") ? (strBoard.match(/%c/g)).length/2 : 0;
    let formats = [];
    for (let i = 0; i < numberMarkedLetters; i++) {
        formats.push(styleFoundWord);
        formats.push('');
    }
    console.log(`${strBoard}\n`, ...formats);
    return true;
}

