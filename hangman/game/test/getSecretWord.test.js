import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { getSecretWord } from "../getSecretWord.js"
import words from "../../assets/words.js"

Deno.test("is secret word in words array?", () => {
  const word = getSecretWord(words)
  assertEquals(words.includes(word.toLowerCase()), true)
})

Deno.test("is secret word a string?", () => {
  const word = getSecretWord(words)
  assertEquals(typeof word === "string", true)
})

Deno.test("does secret word has any letter?", () => {
  const word = getSecretWord(words)
  assertEquals(word.length > 0, true)
})