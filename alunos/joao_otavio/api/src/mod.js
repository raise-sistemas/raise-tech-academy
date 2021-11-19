import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';
import { routes } from './routes.js';

await serve((request) => {
  console.log('Nova conexão');
  const url = new URL(request.url);
  return routes(url);
});
