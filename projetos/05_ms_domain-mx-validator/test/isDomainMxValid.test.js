import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";
import { isDomainMxValid } from "../src/isDomainMxValid.js";

Deno.test("Entrada de domínio válida", async () => {
  const domain = "google.com";
  assertEquals(await isDomainMxValid(domain), true);
});

Deno.test("Entrada de domínio inválida", async () => {
  const domain = "google.google";
  assertEquals(await isDomainMxValid(domain), false);
});
