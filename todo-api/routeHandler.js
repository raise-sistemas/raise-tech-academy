import { routes } from "./routes.js";
import { jsonResponse } from "./utils/jsonResponse.js";
import { notFoundResponse } from "./utils/notFoundResponse.js";

export async function routeHandler(request) {
  const { handler, params } = routes.match(request);
  if (!handler) return notFoundResponse(request);
  const payload = await handler(request, params);
  return payload instanceof Response ? payload : jsonResponse(payload);
}
