import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { getInput } from "../getInput.js"

Deno.test("check lowercase entry", () => {
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
  assertEquals(getInput(game, () => "a"), ["A", game])
})

Deno.test("check uppercase entry", () => {
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
  assertEquals(getInput(game, () => "F"), ["F", game])
})

Deno.test("check word entry", () => {
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
  assertEquals(getInput(game, () => "hello"), ["H", game])
})

Deno.test("check quote entry", () => {
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
  assertEquals(getInput(game, () => "we were not expecting this input"), ["W", game])
})