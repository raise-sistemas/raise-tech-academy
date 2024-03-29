## Tarefas

- Conseguir detectar que o jogo será empate antes de terminar (boardFull)
- Validar linha e coluna entre 0 e 2
- Trocar console.table(board) por uma tela customizada:
```javascript
console.log(`
 O │   │ X
───┼───┼───
 X │ O │ X
───┼───┼───
 O │   │ X
`);
```
## Pontos Positivos:

- Deixar o ponto de entrada (mod.js ou index.js) o mais simples possível,
  chamando uma função externa.
- Formatar sempre o código com o deno fmt ou outro padrão definido.
- Procurar exportar apenas uma função por arquivo.
- Utilizar boolean onde true/false for desejado (ao invés de 1 ou 0).
- Sempre utilizar nomes mais descritivos.
- Utilizar na pasta utils apenas código reutilizável entre vários projetos JS

## Pontos Negativos:

- Não misturar responsabilidades na mesma função.
A função start tem a responsabilidade de rodar a partida e também de reiniciar a partida.
- Refatorar o start para que seja possível escrever um teste para ela.
- Reduzir dependências das funções, criando novas funções e separando quem utiliza quem.
- Separar as funções imutáveis das mutáveis.
