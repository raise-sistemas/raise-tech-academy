import { isDomainMxValid } from "./src/isDomainMxValid.js";

export async function handler(Request) {
  const url = new URL(Request.url);
  const domain = url.searchParams.get("mx");
  const isValid = await isDomainMxValid(domain);
  return new Response(isValid);
}
