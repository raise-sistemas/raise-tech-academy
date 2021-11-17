/*
    Próximos passos:
    - Refatorar
    - Modularizar em mais arquivos e funções
    - Fazer os testes
    - Fazer interface (boneco, erros...)
*/

import words from "./words.js";
const index = Math.round(Math.random() * words.length);
let secretWord = words[index].toUpperCase();

const palavra = new Array(secretWord.length);
palavra.fill('_');

let contagemErros = 0;
const erros = [];

console.log(secretWord);

do{

    let letra = prompt('Digite uma letra:').toUpperCase();

    // não está pegando o traço (-)
    if (letra.match(/[a-zA-Z\u00C0-\u00FF ]+/i) && !letra.includes(' ') && letra.length == 1) {
        if (!palavra.includes(letra) && !erros.includes(letra)) {
            let possui = false;
            for (let i in secretWord) {
                if (letra == secretWord[i]) {
                    palavra[i] = letra;
                    possui = true;
                }
            }
            if (!possui) {
                contagemErros++;
                if (!erros.includes(letra)) {
                    erros.push(letra);
                }
            }
            
            console.log(palavra);
            console.log(`[${contagemErros}] Erros: ${erros}`);
        } else {
            console.log('Letra já foi digitada');
        }
    } else {
        console.log('Letra inválida! Tente novamente');
    }

}while(palavra.indexOf('_') !== -1 && contagemErros < 6);

if (contagemErros >= 6) {
    console.log('Perdeu');
} else {
    console.log(palavra);
}


// console.log(`
// ┏━━┑
// ┃  │
// ┃  ╰
// ┃
// ┃
// ┃
// ┃
// ┃
// ┃
// ┃
// ┗━━━━━━━┛
// `);
// console.log(`
// ┏━━┑
// ┃  │
// ┃  ╰█
// ┃  ┍┻┑
// ┃  │┃│
// ┃  ┘┃└
// ┃  ┏┻┓
// ┃  ┃ ┃
// ┃  ┃ ┃
// ┃  ┗ ┗
// ┗━━━━━━━┛

// ▔ ▔ ▔ ▔ ▔ ▔ ▔ ▔ ▔ ▔
// Letras erradas: e g
// `);


