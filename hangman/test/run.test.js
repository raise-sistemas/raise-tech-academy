import { run } from "../run.js"
import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";

Deno.test("check win condition", () => {
  const doNothing = (...params) => {}
  const getInput = () => "M"
  const game = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", "A", "Ç", "Ã"],
    wrong: []
  }
  assertEquals(run(game, doNothing, getInput, doNothing), "Victory")
})

Deno.test("check defeat condition", () => {
  const doNothing = (...params) => {}
  const getInput = () => "F"
  const game = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 1,
    correct: [" ", "A", "Ç", "Ã"],
    wrong: ["K", "W", "J", "I", "T"]
  }
  assertEquals(run(game, doNothing, getInput, doNothing), "Game Over")
})