import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { updateState } from "../updateState.js"

Deno.test("check continue condition", () => {
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", "A", "Ç", "Ã"],
    wrong: []
  }
  assertEquals(updateState(init), init)
})

Deno.test("check win condition", () => {
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: ["M", "A", "Ç", "Ã"],
    wrong: []
  }
  const end = {
    secretWord: "MAÇÃ",
    status: "Victory",
    chances: 6,
    correct: ["M", "A", "Ç", "Ã"],
    wrong: []
  }
  assertEquals(updateState(init), end)
})

Deno.test("check lose condition", () => {
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 0,
    correct: [" ", "A", "Ç", "Ã"],
    wrong: ["W", "Q", "R", "I", "K", "F"]
  }
  const end = {
    secretWord: "MAÇÃ",
    status: "Game Over",
    chances: 0,
    correct: [" ", "A", "Ç", "Ã"],
    wrong: ["W", "Q", "R", "I", "K", "F"]
  }
  assertEquals(updateState(init), end)
})

/*
{
  secretWord: "MAÇÃ",
  status: "playing",
  chances: 6,
  correct: [" ", " ", " ", " "],
  wrong: []
}
*/