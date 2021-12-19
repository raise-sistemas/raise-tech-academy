import { newParametersResponseJson } from "./newParametersResponseJson.js";

export function jsonResponse(payload, status = 200) {
  if (payload === undefined) 
    payload = null;

  return new Response(...newParametersResponseJson(payload, 200));
}
