import { routeHandler } from "./routeHandler.js";

export async function todoServer(request) {
  try {
    console.log(request.method, request.url);
    return await routeHandler(request);
  } catch (e) {
    console.error(e);
    return new Response(e.message, { status: 500 });
  }
}
