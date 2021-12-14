import * as pattern from '../../stringPatterns/productsPattern.js'
import { parseChunk } from '../parseChunk.js'


export const product = (chunk) => ({
  productName: parseChunk(chunk, pattern.productNamePattern),

  code: parseChunk(chunk, pattern.codePattern),

  totalAmount: parseFloat(parseChunk(chunk, pattern.totalAmountPattern).replace(",", ".")),

  qty: parseFloat(parseChunk(chunk, pattern.qtyPattern).replace(",", ".")),

  unity: parseChunk(chunk, pattern.unityPattern),

  value: parseFloat(parseChunk(chunk, pattern.valuePattern).replace(",", ".")),
})