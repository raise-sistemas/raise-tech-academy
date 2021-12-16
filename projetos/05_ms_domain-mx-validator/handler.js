import { isDomainMxValid } from "./src/isDomainMxValid.js";

export async function handler(Request) {
  const url = new URL(Request.url);
  const domain = url.searchParams.get("mx");

  if (!domain) {
    return new Response(
      "Adicionar um parâmetro mx válido ao fim da URL. Ex: ?mx=domínio",
      { status: 406 }
    );
  }

  const isValid = await isDomainMxValid(domain);
  return new Response(isValid, { status: 200 });
}
