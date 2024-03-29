import { mainHandler } from "./mainHandler.js";

export async function todoServer(request) {
  try {
    return await mainHandler(request);
  } catch (e) {
    console.error(e);
    return new Response(e.message, { status: 500 });
  }
}
