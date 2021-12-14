import { assertEquals } from '../deps.js'
import { purchaseInfo } from "../stringPatterns/purchaseInfoPattern.js"


Deno.test("is match correct?", () => {
  const str = 'asdfdasdfasd<div id="totalNota" anything, it doesnt matter>some value</div></div>'

  const expected = [
    '<div id="totalNota" anything, it doesnt matter>some value</div></div>',
    'some value'
  ];

  const actual = [...purchaseInfo.exec(str)]

  assertEquals(actual, expected);
});