import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { randomNumber } from "../../utils/randomNumber.js"



Deno.test("random number is working?", () => {
  const number = randomNumber(10)
  assertEquals((number<=10)&&(number>=0), true)
})

Deno.test("number is number?", () => {
  const number = randomNumber(10)
  assertEquals(typeof number, 'number')
})