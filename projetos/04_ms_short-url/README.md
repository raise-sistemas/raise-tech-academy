# 04 MS Short Url

Esse MS recebe uma url e um /slug opcional e salva a url neste slug, de modo que quando acessado novamente,
ele redireciona para a url salva.

## Rotas

```
POST / url='https://www.google.com'
retorna:
{
  "slug": "afgts",
  "short_url": "https://short.url/afgts",
  "original_url": "https://www.google.com",
  "visits": 0
}

POST /afgbf url='https://www.google.com'
retorna:
{
  "slug": "afgbf",
  "short_url": "https://short.url/afgts",
  "original_url": "https://www.google.com",
  "visits": 0
}

GET /
retorna:
[
  {
    "slug": "afgbf",
    "short_url": "https://short.url/afgts",
    "original_url": "https://www.google.com",
    "visits": 0
  },
  {
    "slug": "abcdf",
    "short_url": "https://short.url/afgts",
    "original_url": "https://github.com",
    "visits": 0
  },
]

GET /afgbf
retorna:
Location: https://www.google.com
```

## API KEY
Para utilizar as rotas POST deve-se colocar uma chave, cujo valor é **ap147ldokdmra00kmbrgkdk2mgja75p1km5gnvjdnefhhfkdna5asd2lwlm6fkaweiuitnbl**