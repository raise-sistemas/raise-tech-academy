import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";
import { isDomainMxValid } from "../src/isDomainMxValid.js";

Deno.test("Entrada de domínio válida", () => {
  const domain = "google.com";
  assertEquals(isDomainMxValid(domain), true);
});

Deno.test("Entrada de domínio inválida", () => {
  const domain = "google.google";
  assertEquals(isDomainMxValid(domain), false);
});
