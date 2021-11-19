import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { updateState } from "../updateState.js"

Deno.test("check continue condition", async () => {
  const init = {
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
  assertEquals(await updateState(init), init)
})

Deno.test("check win condition", async () => {
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: ["M", "A", "Ç", "Ã"],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  const end = {
    secretWord: "MAÇÃ",
    status: "Victory",
    chances: 6,
    correct: ["M", "A", "Ç", "Ã"],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  assertEquals(await updateState(init), end)
})

Deno.test("check lose condition", async () => {
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 0,
    correct: [" ", "A", "Ç", "Ã"],
    wrong: ["W", "Q", "R", "I", "K", "F"],
    tips: {
      class: [],
      synonyms: []
    }
  }
  const end = {
    secretWord: "MAÇÃ",
    status: "Game Over",
    chances: 0,
    correct: [" ", "A", "Ç", "Ã"],
    wrong: ["W", "Q", "R", "I", "K", "F"],
    tips: {
      class: [],
      synonyms: []
    }
  }
  assertEquals(await updateState(init), end)
})
