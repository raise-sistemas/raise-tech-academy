import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import valuePattern from '../stringPatterns/purchaseList/valuePattern.js'

Deno.test("is match correct?", () => {
  const str = 'asdasdasd<span class="valor">some value</span>anything';
  const expected = [
    '<span class="valor">some value</span>',
    'some value'
  ];

  assertEquals([...valuePattern.exec(str)], expected);
})