import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import companyPattern from '../stringPatterns/companyPattern.js'

Deno.test("is match correct?", () => {
  const str = '<div class="txtCenter">test</div></div>';
  const expected = [
    '<div class="txtCenter">test</div></div>',
    'test'
  ];

  assertEquals([...companyPattern.exec(str)], expected);
})