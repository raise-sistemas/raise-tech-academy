export async function isDomainMxValid(domain) {
  try {
    //Promise.any(await Deno.resolveDns(domain, "MX"));
    await Deno.resolveDns(domain, "MX");
    return true;
  } catch (e) {
    //console.log(e);
    return false;
  }
}
