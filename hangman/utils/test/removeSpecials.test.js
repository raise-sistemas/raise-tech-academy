import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { removeSpecials } from "../removeSpecials.js";


Deno.test("check unnecessary change: 1", () => {
  assertEquals(removeSpecials("a"), "a")
})

Deno.test("check unnecessary change: 2", () => {
  assertEquals(removeSpecials("D"), "D")
})

Deno.test("check tilde: A", () => {
  assertEquals(removeSpecials("Ã"), "A")
})

Deno.test("check tilde: O", () => {
  assertEquals(removeSpecials("Õ"), "O")
})

Deno.test("check accute: A", () => {
  assertEquals(removeSpecials("Á"), "A")
})


Deno.test("check accute: O", () => {
  assertEquals(removeSpecials("Ó"), "O")
})

Deno.test("check accute: U", () => {
  assertEquals(removeSpecials("Ú"), "U")
})

Deno.test("check accute: I", () => {
  assertEquals(removeSpecials("Í"), "I")
})

Deno.test("check accute: E", () => {
  assertEquals(removeSpecials("É"), "E")
})

Deno.test("check circumflex: A", () => {
  assertEquals(removeSpecials("Â"), "A")
})

Deno.test("check circumflex: O", () => {
  assertEquals(removeSpecials("Ô"), "O")
})

Deno.test("check circumflex: E", () => {
  assertEquals(removeSpecials("Ê"), "E")
})