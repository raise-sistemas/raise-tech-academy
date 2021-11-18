import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { init } from "../init.js"

Deno.test("check the output with a known secret word: 1", () => {
  const word = "MAÇÃ"
  const result = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", " ", " ", " "],
    wrong: []
  }
  assertEquals(init(word), result)
})

Deno.test("check the output with a known secret word: 2", () => {
  const word = "PROTOTYPE"
  const result = {
    secretWord: "PROTOTYPE",
    status: "playing",
    chances: 6,
    correct: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    wrong: []
  }
  assertEquals(init(word), result)
})

