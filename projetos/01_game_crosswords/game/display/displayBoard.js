import { styleFoundWord } from '../board/config/styleFoundWords.js';
import { boardSize } from '../board/config/boardSize.js';

export function displayBoard(matriz) {
    console.clear();
    let traits = '';
    for (let i = 1; i < boardSize * 3; i++) {
        traits = traits + '-';
    }
    let decoration;
    if (boardSize <= 7) {
        decoration = '|=-=-=-=-%cCAÇA-PALAVRAS%c-=-=-=-=|';
    } else if (boardSize <= 15) {
        decoration = '|-=-=-=-=-=-=-=-%cCAÇA-PALAVRAS%c-=-=-=-=-=-=-=-|';
    } else {
        decoration = '|=-=-=-=-=-=-=-=-=-=-%cCAÇA-PALAVRAS%c-=-=-=-=-=-=-=-=-=-=|';
    }
    console.log(traits);
    console.log(decoration, 'color: red; font-weight: bold', '');
    console.log(traits);
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

