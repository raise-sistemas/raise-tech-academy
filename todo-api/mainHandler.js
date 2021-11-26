import { routeHandler } from "./routeHandler.js";
import { addCors } from "./utils/addCors.js";
import { authorizeRequest } from "./utils/authorizeRequest.js";

export async function mainHandler(request) {
  console.log(request.method, request.url);
  authorizeRequest(request);
  const response = await routeHandler(request);
  addCors(response.headers);
  return response;
}
