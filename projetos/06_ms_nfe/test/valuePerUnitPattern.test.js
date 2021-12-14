import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import valuePerUnitPattern from '../stringPatterns/purchaseList/valuePerUnitPattern.js'

Deno.test("is match correct?", () => {
  const str = 'Unitanything</strong>some value</span>asdsadsasd';
  const expected = [
    'Unitanything</strong>some value</span>',
    'some value'
  ];

  assertEquals([...valuePerUnitPattern.exec(str)], expected);
})
