import { fetchHtml } from "./fetchHtml.js";
import { extractStoreName } from "./extractors/extractStoreName.js";
import { extractCnpj } from "./extractors/extractCnpj.js";
import { splitHtml } from "./splitHtml.js";
import { extractAdress } from "./extractors/extractAdress.js";
import { extractProduct } from './extractors/extractProduct.js';
import { extractItemsQty } from './extractors/extractItemsQty.js';
import { extractTotal } from './extractors/extractTotal.js';
import { extractDiscount } from './extractors/extractDiscount.js'
import { extractFinalAmount } from "./extractors/extractFinalAmount.js";
import { extractTaxes } from './extractors/extractTaxes.js';
import { extractPayment } from "./extractors/extractPayment.js";


async function createProductList(chunk) {
  const pattern = /Item.*?">(.*?)<\/tr>/g;

  const list = [...chunk.matchAll(pattern)]
    .map(product => extractProduct(product[1]));

  return Promise.all(list);
}


export async function parseNotaUrl(url) {
  const [ 
    storeChunk, 
    productsChunk, 
    purchaseChunk 
  ] = splitHtml(await fetchHtml(url));

  return {
    url,
    store: {
      name: extractStoreName(storeChunk),
      cnpj: extractCnpj(storeChunk),
      adress: extractAdress(storeChunk)
    },
    products: await createProductList(productsChunk),
    purchaseInfo: {
      itemsQty: extractItemsQty(purchaseChunk),
      total: extractTotal(purchaseChunk),
      discount: extractDiscount(purchaseChunk),
      finalAmount: extractFinalAmount(purchaseChunk),
      payment: extractPayment(purchaseChunk),
      taxes: extractTaxes(purchaseChunk)
    }
  }
}
