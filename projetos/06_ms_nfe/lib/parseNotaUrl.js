import { fetchHtml } from "./fetchHtml.js";
import { extractStoreName } from "./extractors/extractStoreName.js";
import { extractCnpj } from "./extractors/extractCnpj.js"
import { splitHtml } from "./splitHtml.js"
import { extractAdress } from "./extractors/extractAdress.js";
import { extractor } from './extractors/extractor.js'
import { extractProduct } from './extractors/extractProduct.js'

function productPattern(index) {
  return new RegExp(String.raw`Item.*?\s${index}">(.*?)<\/tr>`);
} 


export async function parseNotaUrl(url) {
  const [ storeChunk, productsChunk, purchaseChunk ] = splitHtml(await fetchHtml(url));

  return {
    url,
    store: {
      name: extractStoreName(storeChunk),
      cnpj: extractCnpj(storeChunk),
      adress: extractAdress(storeChunk)
    },
    products: await createProductList(productsChunk)
  }
}

async function createProductList(chunk) {
  const list = [];

  for(let index = 1; productPattern(index).exec(chunk); index++) {
    const product = extractor(chunk, productPattern(index));

    list.push(extractProduct(product));
  }
  
  return Promise.all(list);
}

