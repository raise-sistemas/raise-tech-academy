import { mainHandler } from "./handlers/mainHandler.js";
import { newParametersResponseJson } from './utils/newParametersResponseJson.js';

export async function shortUrlServer(request) {
  try {
    return await mainHandler(request);
  } catch (error) {
    console.error('Request error:', error);
    return new Response(...newParametersResponseJson({error}, 500));
  }
}
