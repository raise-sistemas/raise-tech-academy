import { routeHandler } from "./routeHandler.js";
import { apiKeyResquest } from "../utils/apiKeyResquest.js";

export async function mainHandler(request) {
  console.log(request.method, request.url);
  
  if(request.method === 'POST')
    apiKeyResquest(request);

  const response = await routeHandler(request);

  return response;
}
