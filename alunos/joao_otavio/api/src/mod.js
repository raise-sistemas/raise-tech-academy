import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';
import { routes } from './router.js';

await serve((request) => {
  console.log('Nova conexão');  
  return routes(request);
});
