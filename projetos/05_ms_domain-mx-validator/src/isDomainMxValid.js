export async function isDomainMxValid(domain) {
  try {
    const mxDomains = await Deno.resolveDns(domain, "MX");
    const mxDom = await Promise.any(mxDomains);
    await Deno.resolveDns(mxDom.exchange, "A");
    return true;
  } catch (_) {
    return false;
  }
}
