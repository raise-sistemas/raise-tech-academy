import { extractor } from './extractor.js'

function fmtDecimal(numStr) {
  return parseFloat(numStr.replace(",", "."));
}

export function extractProduct(chunk) {
  const name = /<span class="txtTit2">(.*?)<\/span>/;
  const code = /Código:\s(.*?)\)/;
  const total = /<span class="valor">(.*?)<\/span>/;
  const qty = /Qtde.*?<\/strong>(.*?)\s*<\/span>/;
  const unity = /UN.*?<\/strong>(.*?)\s*<\/span>/;
  const value = /Unit.*?<\/strong>\s(.*?)\s*<\/span>/;

  return {
    productName: extractor(chunk, name),
    code: extractor(chunk, code),
    totalAmount: fmtDecimal(extractor(chunk, total)),
    qty: fmtDecimal(extractor(chunk, qty)),
    unity: extractor(chunk, unity),
    value: fmtDecimal(extractor(chunk, value))
  }
}

