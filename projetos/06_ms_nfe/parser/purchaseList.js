import { parseChunk } from './parseChunk.js'
import { productPattern } from '../stringPatterns/productsPattern.js'
import { product } from './subnodes/product.js'

export const purchaseList = async (chunk) => {
  const list = [];
  
  for(let index = 1; productPattern(index).exec(chunk); index++) {
    const productChunk = parseChunk(chunk, productPattern(index));

    list.push(product(productChunk));
  }

  return Promise.all(list);
}