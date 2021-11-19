import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { display } from "../display.js"

Deno.test("check data integrity", async () => {
  const input = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", " ", " ", " "],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  assertEquals(await display(input, [""], console.log), input)
})