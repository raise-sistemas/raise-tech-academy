import * as extract from './extractors/mod.js';
import { fetchHtml } from "./fetchHtml.js";
import { splitHtml } from "./splitHtml.js";


function createProductList(chunk) {
  const pattern = /Item.*?">(.*?)<\/tr>/g;

  const list = [...chunk.matchAll(pattern)]
    .map(product => extract.extractProduct(product[1]));

  return list;
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
      name: extract.extractStoreName(storeChunk),
      cnpj: extract.extractCnpj(storeChunk),
      adress: extract.extractAdress(storeChunk)
    },
    products: createProductList(productsChunk),
    purchaseInfo: {
      itemsQty: extract.extractItemsQty(purchaseChunk),
      total: extract.extractTotal(purchaseChunk) || extract.extractFinalAmount(purchaseChunk),
      discount: extract.extractDiscount(purchaseChunk),
      finalAmount: extract.extractFinalAmount(purchaseChunk),
      payment: extract.extractPayment(purchaseChunk),
      taxes: extract.extractTaxes(purchaseChunk)
    }
  }
}
