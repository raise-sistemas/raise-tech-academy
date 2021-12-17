import { routeHandler } from "./routeHandler.js";
import { apiKeyResquest } from "../utils/apiKeyResquest.js";
import { addCors } from "../utils/addCors.js";

export async function mainHandler(request) {
  console.log(request.method, request.url);
  
  if(request.method === 'POST')
    apiKeyResquest(request);

  const response = await routeHandler(request);
  
  addCors(response.headers);

  return response;
}
