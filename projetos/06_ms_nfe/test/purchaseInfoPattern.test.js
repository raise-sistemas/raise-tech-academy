import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import purchaseInfoPattern from "../stringPatterns/purchaseInfoPattern.js"


Deno.test("is match correct?", () => {
  const str = 'asdfdasdfasd<div id="totalNota" anything, it doesnt matter>some value</div></div>'

  const expected = [
    '<div id="totalNota" anything, it doesnt matter>some value</div></div>',
    'some value'
  ];

  const actual = [...purchaseInfoPattern.exec(str)]

  assertEquals(actual, expected);
});