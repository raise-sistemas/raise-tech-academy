import { newParamsResponseJson } from "./newParamsResponseJson.js";

export function jsonResponse(payload, status = 200) {
  if (payload === undefined) 
    payload = null;

  return new Response(...newParamsResponseJson(payload, status));
}
