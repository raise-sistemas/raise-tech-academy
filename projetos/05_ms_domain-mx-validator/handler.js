import { isDomainMxValid } from "./src/isDomainMxValid.js";

export async function handler(Request) { // falta tratar o request.
  const isValid = await isDomainMxValid(Request);
  return new Response(isValid);
}
