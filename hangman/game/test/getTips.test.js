import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { getTips } from "../getTips.js"

Deno.test("is word class a string?", async () => {
  const tips = await getTips("compartilhar")
  assertEquals(typeof tips.class, "string")
})

Deno.test("is word class not empty?", async () => {
  const tips = await getTips("circunspecto")
  assertEquals(tips.class.length > 0, true)
})

Deno.test("is synonyms an array?", async () => {
  const tips = await getTips("compassivo")
  assertEquals(Array.isArray(tips.synonyms), true)
})

Deno.test("is synonyms not empty?", async () => {
  const tips = await getTips("determinação")

  assertEquals(tips.synonyms.length > 0, true)
})

Deno.test("are all synonyms strings?", async () => {
  const tips = await getTips("determinação")
  let bool = true;

  tips.synonyms.forEach((word) => {
    if(typeof word !== "string") {
      bool = false
    }
  })

  assertEquals(bool, true)
})

Deno.test("are all synonyms not an empty string?", async () => {
  const tips = await getTips("determinação")
  let bool = true;

  tips.synonyms.forEach((word) => {
    if(!word.length) {
      bool = false
    }
  })

  assertEquals(bool, true)
})