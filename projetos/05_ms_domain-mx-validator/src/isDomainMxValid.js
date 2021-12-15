export async function isDomainMxValid(domain) {
  try {
    // mxDomains recebe um array de objetos MX, caso exista.
    const mxDomains = await Deno.resolveDns(domain, "MX");
    // mxDom recebe o primeiro objeto MX válido, caso exista.
    const mxDom = await Promise.any(mxDomains);
    // retorna o ip do objeto MX, caso exista.
    return await Deno.resolveDns(mxDom.exchange, "A") ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
}
