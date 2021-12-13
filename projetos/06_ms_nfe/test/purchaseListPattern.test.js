import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import purchaseListPattern from "../stringPatterns/purchaseListPattern.js"


Deno.test("is match correct?", () => {
  const str = 'asdsadsadsad<tablesadhsajdsldsajdhlas>some value</table>'

  const expected = [
    '<tablesadhsajdsldsajdhlas>some value</table>',
    'some value'
  ];

  const actual = [...purchaseListPattern.exec(str)];

  assertEquals(actual, expected);
});