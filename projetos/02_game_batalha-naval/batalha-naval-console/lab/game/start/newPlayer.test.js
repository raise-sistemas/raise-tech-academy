import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { newPlayer } from "../../../game/start/newPlayer.js"


Deno.test("player is a object?", () => {
  const player = newPlayer()
  assertEquals(typeof player, 'object')
})

Deno.test("player bot is a bot?", () => {
  const player = newPlayer(2,true)
  assertEquals(typeof player.bot, 'object')
})