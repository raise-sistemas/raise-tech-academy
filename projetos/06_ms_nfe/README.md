# 06 Parser NFE

Microserviço de parser de nota fiscal eletrônica do consumidor(NFC-e), mais especificamente de notas do estado do Paraná.
Toda lógica envolvida é dependente do site da secretaria de fazenda do Paraná.

## Executando

Dependências: Deno 1.16 - versões anteriores podem conseguir executar o microserviço(apenas testada a versão 1.15), porém para o teste é necessário a versão 1.16.

Para executar:
```
deno run --allow-net mod.js
```

Para testar:
```
deno test --allow-read
```

## Deploy

O projeto encontra-se hospedado em https://ms-nfe.deno.dev/

É necessário passar o parâmetro "url" na query da consulta.

Exemplos de consulta válida:

https://ms-nfe.deno.dev/?url=http://www.fazenda.pr.gov.br/nfce/qrcode?p=41211176430438006536650090002130381009595086%7C2%7C1%7C1%7CF15157FEE4FE43A6343C48685F0A9A5D5BB9594E

- Nota Original: http://www.fazenda.pr.gov.br/nfce/qrcode?p=41211176430438006536650090002130381009595086%7C2%7C1%7C1%7CF15157FEE4FE43A6343C48685F0A9A5D5BB9594E

https://ms-nfe.deno.dev/?url=http://www.fazenda.pr.gov.br/nfce/qrcode?p=41211106057223027452650110003384709110768323%7C2%7C1%7C12%7C186.47%7C415750326c7046614431637a7077654d75526b416a534471774e343d%7C1%7C07F7324CFAE58D2E90F2C77F81ABA63201D917F3

- Nota Original: http://www.fazenda.pr.gov.br/nfce/qrcode?p=41211106057223027452650110003384709110768323%7C2%7C1%7C12%7C186.47%7C415750326c7046614431637a7077654d75526b416a534471774e343d%7C1%7C07F7324CFAE58D2E90F2C77F81ABA63201D917F3

https://ms-nfe.deno.dev/?url=http://www.fazenda.pr.gov.br/nfce/qrcode?p=41211106057223027452650110003378161110751762%7C2%7C1%7C1%7CB5060BF2A9625256D5FCCF5169F65A38FB9D2FCF

- Nota Original: http://www.fazenda.pr.gov.br/nfce/qrcode?p=41211106057223027452650110003378161110751762%7C2%7C1%7C1%7CB5060BF2A9625256D5FCCF5169F65A38FB9D2FCF
