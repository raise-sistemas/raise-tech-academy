# 05 MX Domain Validator

Não é possível saber se um email existe sem tentar enviar um email para ele, mas é possível verificar se o domínio existe e se ele possui um registro MX configurado.

Utilizar a API https://doc.deno.land/deno/stable/~/Deno.resolveDns para resolver o dominio do email verificando se existe registro MX.

Para executar localmente:
```
deno run --allow-net ./mod.js
```

Para verificar os testes de entrada:
```
deno test --allow-read ./test/isDomainMxValid.test.js
```

* Disponível em: https://mx-validator.deno.dev

* Acesso com entrada de parâmetro válido: https://mx-validator.deno.dev?mx=google.com
* Acesso com entrada de parâmetro inválido: https://mx-validator.deno.dev?mx=google.google
