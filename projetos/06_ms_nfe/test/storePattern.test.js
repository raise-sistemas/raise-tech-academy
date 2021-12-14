import { assertEquals } from '../deps.js'
import { 
  storePattern, 
  adressPattern, 
  cnpjPattern, 
  storeNamePattern 
} from '../stringPatterns/storePattern.js'

Deno.test("store node regexp match", () => {
  const str = '<div class="txtCenter">test</div></div>';
  const expected = [
    '<div class="txtCenter">test</div></div>',
    'test'
  ];

  assertEquals([...storePattern.exec(str)], expected);
})

Deno.test("cnpj regexp match", () => {
  const str = '<div class="text">CNPJ: 76.430.438/0065-36</div>';
  const expected = [
    'CNPJ: 76.430.438/0065-36</div>',
    '76.430.438/0065-36'
  ];

  assertEquals([...cnpjPattern.exec(str)], expected);
})

Deno.test("adress regexp match", () => {
  const str = 'div class="text">CNPJ: 76.430.438/0065-36</div><div class="text">adress';

  const expected = [
    'CNPJ: 76.430.438/0065-36</div><div class="text">adress',
    'adress'
  ];

  assertEquals([...adressPattern.exec(str)], expected);
})

Deno.test("store name regexp match", () => {
  const str = '<div>Store Name</div>';

  const expected = [
    '<div>Store Name</div>',
    'Store Name'
  ];

  assertEquals([...storeNamePattern.exec(str)], expected);
})
