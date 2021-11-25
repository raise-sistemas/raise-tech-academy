## IDEIA GERAL

  1- Escolher uma opção(mod.js/cliMenu.js)

  2- Tratar o caso escolhido, caso necessitar de informações a mais, pedir ao usuário(pasta menus)

  3- Realizar a requisição para a API(possívelmente função genérica na pasta utils ou via fetch nativo)

  4- Tratar o retorno da requisição para os padrões de formatação pedidos(pasta display)
    
    Orientações:

      "Na listagem de tarefas, primeiro exibir utilizando o console.table,
      depois melhorar para uma lista formatada, exibindo a data formatada
      e as tarefas concluídas exibirem com uma cor mais fraca e riscada."
    

  5- Printar esse resultado final no console

  6- retornar ao menu principal(mod.js)


## ALÉM DISSO

  1- Adicionar as rotas restantes no todo-api
    (Atualizar uma todo | Exibir uma todo isolada | Toggle todo selecionada)

  2- Implementar o cliMenu

### divisão
Otávio/João - routes.get("/", actions.rootAction);
              routes.get("/routes", actions.routesAction);


Patrick/Guilherme - routes.get("/todos/:id", actions.getTodoAction);
                    routes.post("/todos", actions.addTodoAction); addToDosMenu, getToDoMenus, dentro de toDoCli, chamar as funções no displayMenu


Jorge/Nicole -  routes.get("/todos", actions.listTodosAction);
                routes.get("/todo", actions.getTodoAction);

Sabrina/Felipe - Atualizar uma todo 

Matheus/Leonardo Guaraná - cliMenu, mod, Toggle todo selecionada;

Paulo/Leonardo Lima - remover uma todo isolada;
