import { isDomainMxValid } from "../src/isDomainMxValid.js";
import { assertEquals } from "../deps.js"

Deno.test("Entrada de domínio válida", async () => {
  const domain = "google.com";
  assertEquals(await isDomainMxValid(domain), true);
});

Deno.test("Entrada de domínio inválida", async () => {
  const domain = "google.google";
  assertEquals(await isDomainMxValid(domain), false);
});
