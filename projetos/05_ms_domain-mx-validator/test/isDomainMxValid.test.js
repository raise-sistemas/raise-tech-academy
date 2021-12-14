import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";
import { isDomainMxValid } from "../src/isDomainMxValid.js";

Deno.test("Entradas de domínio válidas", () => {
  const domains = [];

  for (const domain of domains) {
    assertEquals(isDomainMxValid(domain), true);
  }
});

Deno.test("Entradas de domínio inválidas", () => {
  const domains = [];

  for (const domain of domains) {
    assertEquals(isDomainMxValid(domain), false);
  }
});
