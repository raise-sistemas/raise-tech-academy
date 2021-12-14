import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import pattern from '../stringPatterns/purchaseList/productPattern.js'

Deno.test("is match correct?", () => {
  const str = '<tr id="Item + 1">something</tr>'

  const expected = [
    'Item + 1">something</tr>',
    'something'
  ];
  
  const actual = pattern(1).exec(str);
  
  assertEquals([...actual], expected);
})