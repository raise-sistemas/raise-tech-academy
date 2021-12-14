import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import codePattern from '../stringPatterns/purchaseList/codePattern.js'

Deno.test("is match correct?", () => {
  const str = '<tag>(Código: 123456789)</tag>';
  const expected = [
    'Código: 123456789)',
    '123456789'
  ];

  assertEquals([...codePattern.exec(str)], expected);
})