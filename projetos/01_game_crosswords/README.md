# 01 Game Crosswords

1. Criar o layout estátido do jogo para aprovação.
2. Criar um diretório onde cada arquivo é json que representa um tabuleiro.
Será estático de início, por último tentaremos gerar dinamicamente.
3. Ao exibir o tabuleiro, utilizar números para as linhas e letras para as colunas (B12, E7, etc).
Ver o arquivo lab/grid.js.
4. No prompt a pessoa digita: B12E7 representando o começo e fim da palavra e se acertou, a palavra aparece com fundo de outra cor no tabuleiro e riscada na lista de palavras.
5. O jogo termina quando encontrar todas palavras.

## Estrutura do json:

largura e altura do tabuleiro e array de palavras, contendo a palavra e a coordenada xy de inicio e fim. Vamos utilizar o index de base 0 para ficar mais fácil de mapear no js.

```json
{
  "width": 10,
  "height": 10,
  "words": [
    {
      "word": "javascript",
      "begin": {
        "row": 0,
        "col": 0
      },
      "end": {
        "row": 0,
        "col": 9
      }
    }
  ]
}
```

## Validações

1. Criar uma função que valida se as palavras não contém uma outra dentro dela. Por exemplo pato e patologia não podem existir no mesmo jogo.
2. Validar se as palavras cabem dentro do tamanho do grid (vertical, horizontal e diagonal)
3. Validar se as coordenadas estão corretas (se dá pra desenhar dentro do grid a palavra toda)
4. Ao gerar as letras para preencher o tabuleiro, verificar se nenhuma das palavras foi formada sem querer.
5. Verificar se a soma das palavras cabe no tabuleiro. Exemplo, javascript, typescript cabem num tabuleiro 2 x 10, mas não cabe outra palavra.
