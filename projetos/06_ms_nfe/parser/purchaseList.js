import { parseChunk } from './parseChunk.js'
import pattern from '../stringPatterns/purchaseList/productPattern.js'
import { product } from './subnodes/product.js'

export const purchaseList = async (chunk) => {
  const list = [];
  
  for(let index = 1; pattern(index).exec(chunk); index++) {
    const productChunk = parseChunk(chunk, pattern(index));

    list.push(product(productChunk));
  }

  return Promise.all(list);
}