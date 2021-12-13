# 04 MS Short Url

Esse MS recebe uma url e um /slug opcional e salva a url neste slug, de modo que quando acessado novamente,
ele redireciona para a url salva.

Os métodos seriam:

```
POST / url='https://www.google.com'
retorna:
{
  "slug": "afgts",
  "short_url": "https://short.url/afgts"
  "original_url": "https://www.google.com"
}

POST /afgbf url='https://www.google.com'
retorna:
{
  "slug": "afgbf",
  "short_url": "https://short.url/afgts"
  "original_url": "https://www.google.com"
}

GET /afgbf
retorna:
Location: https://www.google.com
```

1. Após criar o funcionamento básico, proteger as rotas post utilizando api_key
2. Armazenar um contador de visitas por slug
