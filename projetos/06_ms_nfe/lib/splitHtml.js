import { extractor } from "./extractors/extractor.js"

function minify(raw) {
  return raw.replace(/\n/g, "").replace(/(>\s*<)/g, "><");
}

export function splitHtml(html) {
  const storePattern = /<div class="txtCenter">(.*?)<\/div><\/div>/;
  const productsPattern = /<table.*?>(.*?)<\/table>/;
  const purchaseInfoPattern = /<div id="totalNota".*?>(.*?)<\/div><\/div>/

  const min = minify(html);

  return [
    extractor(min, storePattern),
    extractor(min, productsPattern),
    extractor(min, purchaseInfoPattern)
  ]
}

