import words from "./words.js";
const index = Math.round(Math.random() * words.length);
const secretWord = words[index];
console.log(secretWord.toUpperCase());
console.log(`
┏━━┑
┃  │
┃  ╰
┃
┃
┃
┃
┃
┃
┃
┗━━━━━━━┛
`);
console.log(`
┏━━┑
┃  │
┃  ╰█
┃  ┍┻┑
┃  │┃│
┃  ┘┃└
┃  ┏┻┓
┃  ┃ ┃
┃  ┃ ┃
┃  ┗ ┗
┗━━━━━━━┛
A E C D E F G H I E
▔ ▔ ▔ ▔ ▔ ▔ ▔ ▔ ▔ ▔
Letras erradas: T J L
`);
