import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { changeCoordinate } from "../../utils/changeCoordinate.js"

Deno.test("change coordinate north is working?", () => {
  const coordinate = changeCoordinate('a 7','n')
  assertEquals(coordinate, 'a 6')
})

Deno.test("change coordinate south is working?", () => {
  const coordinate = changeCoordinate('f 4','s')
  assertEquals(coordinate, 'f 5')
})

Deno.test("change coordinate east is working?", () => {
  const coordinate = changeCoordinate('c 4','l')
  assertEquals(coordinate, 'd 4')
})

Deno.test("change coordinate west is working?", () => {
  const coordinate = changeCoordinate('g 2','o')
  assertEquals(coordinate, 'f 2')
})