import { Home } from './app/controllers/Home.js';
import { About } from './app/controllers/About.js';

export const routes = (url) => {
  switch(url.pathname){    
    case '/':
      return Home();

    case '/about':
      return About();

    default:
      return new Response('Pagina nao encontrada!', {status: 404});
  }
};
