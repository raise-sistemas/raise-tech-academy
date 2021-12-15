import * as extract from './extractors/mod.js';
import { fetchHtml } from "./fetchHtml.js";
import { minify } from './minify.js'


function createProductList(chunk) {
  const pattern = /<tr\sid="Item.*?">(.*?)<\/tr>/g;

  const list = [...chunk.matchAll(pattern)]
    .map(product => extract.extractProduct(product[1]));

  return list;
}


export async function parseNotaUrl(url) {
  const html = await fetchHtml(url)
  const min = minify(html)

  return {
    url,
    store: {
      name: extract.extractStoreName(min),
      cnpj: extract.extractCnpj(min),
      adress: extract.extractAdress(min)
    },
    products: createProductList(min),
    purchaseInfo: {
      itemsQty: extract.extractItemsQty(min),
      total: extract.extractTotal(min) || extract.extractFinalAmount(min),
      discount: extract.extractDiscount(min),
      finalAmount: extract.extractFinalAmount(min),
      payment: extract.extractPayment(min),
      taxes: extract.extractTaxes(min)
    }
  }
}


