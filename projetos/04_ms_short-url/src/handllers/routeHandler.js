import { routes } from "../routes.js";
import { jsonResponse } from "../utils/jsonResponse.js";
import { redirectResponse } from "../utils/redirectResponse.js";
import { notFoundResponse } from "../utils/notFoundResponse.js";

export async function routeHandler(request) {
  const { handler, params } = routes.match(request);
  
  if (!handler) 
    return notFoundResponse(request);
  
  const payload = await handler(request, params);
    
  // a rota GET /:slug é a única que retorna uma string
  if(typeof(payload) === 'string')
    return payload instanceof Response ? payload : redirectResponse(payload);

  return payload instanceof Response ? payload : jsonResponse(payload);
}
