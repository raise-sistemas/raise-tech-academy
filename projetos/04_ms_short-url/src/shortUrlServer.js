import { mainHandler } from "./handlers/mainHandler.js";
import { newParamsResponseJson } from './utils/newParamsResponseJson.js';

export async function shortUrlServer(request) {
  try {
    return await mainHandler(request);
  } catch (error) {
    console.error('Request error:', error);
    return new Response(...newParamsResponseJson({error}, 500));
  }
}
