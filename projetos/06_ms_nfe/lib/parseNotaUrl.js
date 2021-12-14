import { fetchHtml } from "./fetchHtml.js";
import { extractStoreName } from "./extractors/extractStoreName.js";

export async function parseNotaUrl(url) {
  const html = await fetchHtml(url);
  return {
    url,
    store: {
      name: extractStoreName(html),
      cnpj: "76.430.438/0065-36",
    },
  };
}
