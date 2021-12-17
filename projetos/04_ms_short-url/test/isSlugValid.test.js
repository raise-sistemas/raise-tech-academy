import { isSlugValid } from "../src/utils/isSlugValid.js";
import { assertEquals } from "../deps.js"

Deno.test('Check if slug is valid', () => {
  const slug = 'abc';
  assertEquals(isSlugValid(slug), true);
});
