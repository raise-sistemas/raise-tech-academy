import { assertEquals } from '../deps.js'
import {
  codePattern,
  productNamePattern,
  productPattern,
  productsPattern,
  qtyPattern,
  totalAmountPattern,
  unityPattern,
  valuePattern
} from '../stringPatterns/productsPattern.js'

Deno.test("product list regexp match", () => {
  const str = 'asdsadsadsad<tablesadhsajdsldsajdhlas>some value</table>'

  const expected = [
    '<tablesadhsajdsldsajdhlas>some value</table>',
    'some value'
  ];

  const actual = [...productsPattern.exec(str)];

  assertEquals(actual, expected);
});


Deno.test("single product regexp match", () => {
  const str = '<tr id="Item + 1">something</tr>'

  const expected = [
    'Item + 1">something</tr>',
    'something'
  ];
  
  const actual = productPattern(1).exec(str);
  
  assertEquals([...actual], expected);
})

Deno.test("qty regexp match", () => {
  const str = 'Qtdeanything</strong>some value</span>asdsadsasd';
  const expected = [
    'Qtdeanything</strong>some value</span>',
    'some value'
  ];

  assertEquals([...qtyPattern.exec(str)], expected);
})

Deno.test("product name regexp match", () => {
  const str = 'asdasdasd<span class="txtTit2">some value</span>anything';
  const expected = [
    '<span class="txtTit2">some value</span>',
    'some value'
  ];

  assertEquals([...productNamePattern.exec(str)], expected);
})

Deno.test("product value regexp match", () => {
  const str = 'Unitanything</strong> 2,35 </span>asdsadsasd';
  const expected = [
    'Unitanything</strong> 2,35 </span>',
    '2,35'
  ];

  assertEquals([...valuePattern.exec(str)], expected);
})

Deno.test("product code regexp match", () => {
  const str = '<tag>(Código: 123456789)</tag>';
  const expected = [
    'Código: 123456789)',
    '123456789'
  ];

  assertEquals([...codePattern.exec(str)], expected);
})

Deno.test("product total amount regexp match", () => {
  const str = 'asdasdasd<span class="valor">some value</span>anything';
  const expected = [
    '<span class="valor">some value</span>',
    'some value'
  ];

  assertEquals([...totalAmountPattern.exec(str)], expected);
})

Deno.test("measurement unity regexp match", () => {
  const str = 'UNanything</strong>some value</span>asdsadsasd';
  const expected = [
    'UNanything</strong>some value</span>',
    'some value'
  ];

  assertEquals([...unityPattern.exec(str)], expected);
})