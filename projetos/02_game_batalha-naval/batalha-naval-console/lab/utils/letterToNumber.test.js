import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { letterToNumber } from "../../utils/letterToNumber.js"

Deno.test("letter to number is working?", () => {
  const number = letterToNumber('a')
  assertEquals(number, 1)
})

Deno.test("letter to number is working?", () => {
  const number = letterToNumber('k')
  assertEquals(number, 11)
})

Deno.test("letter to number is working?", () => {
  const number = letterToNumber('z')
  assertEquals(number, 26)
})

Deno.test("number is number?", () => {
  const number = letterToNumber(1)
  assertEquals(typeof number, 'number')
})