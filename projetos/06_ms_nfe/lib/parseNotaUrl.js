import { fetchHtml } from "./fetchHtml.js";
import { extractStoreName } from "./extractors/extractStoreName.js";
import { extractCnpj } from "./extractors/extractCnpj.js"
import { splitHtml } from "./splitHtml.js"
import { extractAdress } from "./extractors/extractAdress.js";
import { extractor } from './extractors/extractor.js'
import { extractProduct } from './extractors/extractProduct.js'
import { extractItemsQty } from './extractors/extractItemsQty.js'

function productPattern(index) {
  return new RegExp(String.raw`Item.*?\s${index}">(.*?)<\/tr>`);
} 

async function createProductList(chunk) {
  const list = [];

  for(let index = 1; productPattern(index).exec(chunk); index++) {
    const product = extractor(chunk, productPattern(index));

    list.push(extractProduct(product));
  }
  
  return Promise.all(list);
}


export async function parseNotaUrl(url) {
  const [ 
    storeChunk, 
    productsChunk, 
    purchaseChunk 
  ] = splitHtml(await fetchHtml(url));

  console.log(purchaseChunk)
  return {
    url,
    store: {
      name: extractStoreName(storeChunk),
      cnpj: extractCnpj(storeChunk),
      adress: extractAdress(storeChunk)
    },
    products: await createProductList(productsChunk),
    purchaseInfo: {
      itemsQty: extractItemsQty(purchaseChunk)
    }
  }
}
