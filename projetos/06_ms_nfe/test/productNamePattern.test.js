import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import productNamePattern from '../stringPatterns/purchaseList/productNamePattern.js'

Deno.test("is match correct?", () => {
  const str = 'asdasdasd<span class="txtTit2">some value</span>anything';
  const expected = [
    '<span class="txtTit2">some value</span>',
    'some value'
  ];

  assertEquals([...productNamePattern.exec(str)], expected);
})
