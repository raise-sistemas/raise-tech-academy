import { extractor } from './extractor.js'

export function extractCnpj(chunk) {
  return extractor(chunk, /CNPJ:\s+(.*?)<\/div>/);
}