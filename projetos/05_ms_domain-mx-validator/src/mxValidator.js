export function mxValidator(email) {
  return await Deno.resolveDns(email, "A");
}
