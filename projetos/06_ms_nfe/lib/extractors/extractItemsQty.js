import { extractor } from './extractor.js'

export function extractItemsQty(chunk) {
  const pattern = /total\sde\sitens.*?totalNumb">(.*?)</

  return parseInt(extractor(chunk, pattern));
}