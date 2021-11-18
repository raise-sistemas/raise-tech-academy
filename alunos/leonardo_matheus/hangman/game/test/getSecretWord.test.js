import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { getSecretWord } from "../getSecretWord.js"
import words from "../../assets/words.js"

Deno.test("is secret word in words array", () => {
  assertEquals(words.includes(getSecretWord().toLowerCase()), true)
})