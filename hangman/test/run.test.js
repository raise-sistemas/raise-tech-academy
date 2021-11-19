import { run } from "../run.js"
import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";

Deno.test("check win condition", async () => {
  const doNothing = (...params) => {}
  const getInput = () => "M"
  const game = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", "A", "Ç", "Ã"],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  const end = await run(game, doNothing, getInput, doNothing)
  assertEquals(end.status, "Victory")
})

Deno.test("check defeat condition", async () => {
  const doNothing = (...params) => {}
  const getInput = () => "F"
  const game = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 1,
    correct: [" ", "A", "Ç", "Ã"],
    wrong: ["K", "W", "J", "I", "T"],
    tips: {
      class: [],
      synonyms: []
    }
  }  
  const end = await run(game, doNothing, getInput, doNothing)
  assertEquals(end.status, "Game Over")
})