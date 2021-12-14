import amount from '../../stringPatterns/purchaseList/amountPattern.js'
import code from '../../stringPatterns/purchaseList/codePattern.js'
import unit from '../../stringPatterns/purchaseList/measurementUnitPattern.js'
import name from '../../stringPatterns/purchaseList/productNamePattern.js'
import totalValue from '../../stringPatterns/purchaseList/valuePattern.js';
import valuePerUnit from '../../stringPatterns/purchaseList/valuePerUnitPattern.js'
import { parseChunk } from '../parseChunk.js'


export const product = (chunk) => ({
  productName: parseChunk(chunk, name),

  code: parseChunk(chunk, code),

  totalValue: parseChunk(chunk, totalValue),

  amount: parseChunk(chunk, amount).replace(/\s/g, ""),

  measurementUnit: parseChunk(chunk, unit).replace(/\s/g, ""),

  valuePerUnit: parseChunk(chunk, valuePerUnit).replace(/\s/g, ""),
})