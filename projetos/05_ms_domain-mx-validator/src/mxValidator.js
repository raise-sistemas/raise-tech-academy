export function mxValidator(domain) {
  return await Deno.resolveDns(domain, "MX");
}
