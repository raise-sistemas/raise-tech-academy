import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { getInput } from "../getInput.js"

Deno.test("check lowercase entry", async () => {
  const game = {
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
  assertEquals(await getInput(game, () => "a"), ["A", game])
})

Deno.test("check uppercase entry", async () => {
  const game = {
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
  assertEquals(await getInput(game, () => "F"), ["F", game])
})

Deno.test("check word entry", async () => {
  const game = {
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
  assertEquals(await getInput(game, () => "hello"), ["H", game])
})

Deno.test("check quote entry", async () => {
  const game = {
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
  assertEquals(await getInput(game, () => "we were not expecting this input"), ["W", game])
})