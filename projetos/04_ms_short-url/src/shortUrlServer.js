import { mainHandler } from "./handllers/mainHandler.js";

export async function shortUrlServer(request) {
  try {
    return await mainHandler(request);
  } catch (e) {
    console.error(e);
    return new Response(e.message, { status: 500 });
  }
}
