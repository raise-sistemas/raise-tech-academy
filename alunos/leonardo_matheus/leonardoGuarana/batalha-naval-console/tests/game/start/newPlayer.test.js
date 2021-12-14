import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { newPlayer } from "../../../game/start/newPlayer.js"


Deno.test("player is a object?", () => {
  const player = newPlayer()
  assertEquals((typeof player === 'object'), true)
})