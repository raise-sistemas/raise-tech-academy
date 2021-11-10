import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { soma } from "./soma.js"

Deno.test("Soma vazia", () => {
  assertEquals(soma(), 0)
})

Deno.test("Soma 1 valor", () => {
  assertEquals(soma(2), 2)
})

Deno.test("Soma 2 valores", () => {
  assertEquals(soma(2, 3), 5)
})

Deno.test("Soma n valores", () => {
  assertEquals(soma(2, 3, 5, 10), 20)
})
