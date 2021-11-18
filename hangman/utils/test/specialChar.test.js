import { specialChar } from "../specialChar.js"
import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";


Deno.test("check unnecessary change: 1", () => {
  assertEquals(specialChar("a"), "a")
})

Deno.test("check unnecessary change: 2", () => {
  assertEquals(specialChar("D"), "D")
})

Deno.test("check tilde: A", () => {
  assertEquals(specialChar("Ã"), "A")
})

Deno.test("check tilde: O", () => {
  assertEquals(specialChar("Õ"), "O")
})

Deno.test("check accute: A", () => {
  assertEquals(specialChar("Á"), "A")
})


Deno.test("check accute: O", () => {
  assertEquals(specialChar("Ó"), "O")
})

Deno.test("check accute: U", () => {
  assertEquals(specialChar("Ú"), "U")
})

Deno.test("check accute: I", () => {
  assertEquals(specialChar("Í"), "I")
})

Deno.test("check accute: E", () => {
  assertEquals(specialChar("É"), "E")
})

Deno.test("check circumflex: A", () => {
  assertEquals(specialChar("Â"), "A")
})

Deno.test("check circumflex: O", () => {
  assertEquals(specialChar("Ô"), "O")
})

Deno.test("check circumflex: E", () => {
  assertEquals(specialChar("Ê"), "E")
})