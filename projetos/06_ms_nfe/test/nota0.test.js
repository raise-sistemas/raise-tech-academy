import { assertEquals } from "../deps.js";
import { parseNotaUrl } from "../lib/parseNotaUrl.js";

function dirpath(path) {
  return path.split("/").slice(0, -1).join("/");
}

Deno.test("nota0", async () => {
  const url = dirpath(import.meta.url) + "/../fixtures/nota0.html";
  const jsonPath = new URL(dirpath(import.meta.url) + "/../fixtures/nota0.json")
    .pathname;
  const expected = Deno.readTextFileSync(jsonPath)
    .trim()
    .replace("__URL__", url);

  const data = await parseNotaUrl(url);
  const actual = JSON.stringify(data, null, 2);
  assertEquals(actual, expected);
});
