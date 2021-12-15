import { extractor } from './extractor.js'

export function extractItemsQty(html) {
  return parseInt(extractor(html, /total\sde\sitens.*?totalNumb">(.*?)</));
}