import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import amountPattern from '../stringPatterns/purchaseList/amountPattern.js'

Deno.test("is match correct?", () => {
  const str = 'Qtdeanything</strong>some value</span>asdsadsasd';
  const expected = [
    'Qtdeanything</strong>some value</span>',
    'some value'
  ];

  assertEquals([...amountPattern.exec(str)], expected);
})