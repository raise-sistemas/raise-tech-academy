import { extractor } from './extractor.js'

export function extractCnpj(html) {
  return extractor(html, /CNPJ:\s+(.*?)<\/div>/);
}