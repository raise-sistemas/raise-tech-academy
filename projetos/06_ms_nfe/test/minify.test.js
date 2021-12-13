import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts"
import { minify } from "../parser/minify.js"

Deno.test("remove whitespaces between tags", () => {
  const str = '<div>         <foo>bar</foo>         </div>'
  assertEquals(minify(str), '<div><foo>bar</foo></div>');
});

Deno.test("remove newlines between tags", () => {
  const str = '<div>\n\n\n\n<foo>bar</foo>\n</div>'

  assertEquals(minify(str), '<div><foo>bar</foo></div>');
});

Deno.test("remove whitespaces and newlines between tags", () => {
  const str = "<div>\n \n \n <foo>bar</foo>   \n \n</div>"

  assertEquals(minify(str), '<div><foo>bar</foo></div>');
});

Deno.test("do not remove whitespaces when inside a tag value", () => {
  const str = '<div><foo>bar \n \n \n bar2</foo></div>'

  assertEquals(minify(str), '<div><foo>bar    bar2</foo></div>');
});