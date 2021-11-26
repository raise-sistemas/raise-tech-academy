import { routes } from "./routes.js";
import { jsonResponse } from "./utils/jsonResponse.js";
import { notFoundResponse } from "./utils/notFoundResponse.js";

function addCors(headers) {
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Methods", "*");
  headers.append("Access-Control-Allow-Headers", "*");
  headers.append("access-control-max-age", "86400");
}

export async function routeHandler(request) {
  console.log(request.method, request.url);
  const { handler, params } = routes.match(request);
  if (!handler) return notFoundResponse(request);

  const payload = await handler(request, params);

  const response = payload instanceof Response
    ? payload
    : jsonResponse(payload);

  addCors(response.headers);

  return response;
}
