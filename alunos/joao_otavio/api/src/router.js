import * as actions from './actions/Todo.js';

export const routes = async (request) => {
  const method = request.method;
  const url = new URL(request.url);

  switch(method){
    case 'GET':
      switch(url.pathname){
        case '/todos':
          return actions.getTodos();
        case '/todo':
          const id = url.searchParams.get('id');
          return actions.getTodo(id);
        default:
          return new Response('Página não encontrada!', {status: 404});
      }

    case 'POST':
      switch(url.pathname){
        case '/todo':         
            const {title} = await request.json();   
            return actions.createTodo(title);
        default:
          return new Response('Página não encontrada!', {status: 404})
      }

    case 'PATCH':
      const id = url.searchParams.get('id');
      switch(url.pathname){
        case '/todo':
          const {title} = await request.json();
          return actions.updateTodo(id, title);
        case '/todo/toggle':
          return actions.toggleCompleted(id);
        default:
            return new Response('Página não encontrada!', {status: 404})
      }

    case 'DELETE':
      switch(url.pathname){
        case '/todo':
          const id = url.searchParams.get('id');
          return actions.deleteTodo(id);
        default:
            return new Response('Página não encontrada!', {status: 404})
      }

    default:
      return new Response('Página não encontrada!', {status: 404});
  }
};
