import { routeHandler } from "./routeHandler.js";
import { authorizeRequest } from "../utils/authorizeRequest.js";

export async function mainHandler(request) {
  console.log(request.method, request.url);
  
  if(request.method === 'POST')
    authorizeRequest(request);
  
  const response = await routeHandler(request);

  return response;
}
