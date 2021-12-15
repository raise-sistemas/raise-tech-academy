import { extractProduct } from './extractProduct.js';

export function extractProducts(html) {
  const pattern = /<tr\sid="Item.*?">(.*?)<\/tr>/g;

  const list = [...html.matchAll(pattern)]
    .map(product => extractProduct(product[1]));

  return list;
}