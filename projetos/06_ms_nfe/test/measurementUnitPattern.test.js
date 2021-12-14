import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import measurementUnitPattern from '../stringPatterns/purchaseList/measurementUnitPattern.js'

Deno.test("is match correct?", () => {
  const str = 'UNanything</strong>some value</span>asdsadsasd';
  const expected = [
    'UNanything</strong>some value</span>',
    'some value'
  ];

  assertEquals([...measurementUnitPattern.exec(str)], expected);
})
