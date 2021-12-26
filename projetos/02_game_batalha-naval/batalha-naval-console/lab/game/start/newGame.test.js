import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { newGame } from "../../../game/start/newGame.js"


Deno.test("game is a object?", () => {
  const game = newGame()
  assertEquals(typeof game, 'object')
})

Deno.test("bot game have bot?", () => {
  const game = newGame(true)
  assertEquals(game.bot, true)
})

Deno.test("Not bot game have bot?", () => {
  const game = newGame()
  assertEquals(game.bot , false)
})