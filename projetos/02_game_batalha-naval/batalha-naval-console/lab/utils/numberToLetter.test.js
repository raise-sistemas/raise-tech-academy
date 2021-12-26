import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { numberToLetter } from "../../utils/numberToLetter.js"


Deno.test("number to letter is working?", () => {
  const letter = numberToLetter(1)
  assertEquals(letter, 'a')
})

Deno.test("number to letter is working?", () => {
  const letter = numberToLetter(11)
  assertEquals(letter, 'k')
})

Deno.test("number to letter is working?", () => {
  const letter = numberToLetter(26)
  assertEquals(letter, 'z')
})

Deno.test("letter is string?", () => {
  const letter = numberToLetter(1)
  assertEquals(typeof letter, 'string')
})