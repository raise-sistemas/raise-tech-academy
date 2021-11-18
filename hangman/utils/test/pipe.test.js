import { pipe } from "../pipe.js"
import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import words from "../../assets/words.js";

Deno.test("check number operations", () => {
  const input = 5
  const addFive = num => num + 5
  const multiplyByThree = num => num * 3
  const subtractEight = num => num - 8
  const result = pipe(input)(
    addFive,
    multiplyByThree,
    subtractEight
  )
  assertEquals(result, 22)
})

Deno.test("check string operations", () => {
  const str = "hello"
  const str2 = "world"
  const strConcat = x => y => x + " " + y
  const upperCase = str => str.toUpperCase()
  const result = pipe(str2)(
    strConcat(str),
    upperCase
  )
  assertEquals(result, "HELLO WORLD")
})