export async function isDomainMxValid(domain) {
  try {
    const mxDomains = await Deno.resolveDns(domain, "MX");
    console.log(mxDomains);
    const mxDom = await Promise.any(mxDomains);
    console.log(mxDom);
    const mx = await Deno.resolveDns(mxDom.exchange, "A")
    console.log(mx);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
