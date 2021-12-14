import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { newGame } from "../../../game/start/newGame.js"


Deno.test("players is a object?", () => {
  const players = newGame()
  assertEquals((typeof players === 'object'), true)
})

