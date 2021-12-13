import pattern from '../../stringPatterns/company/cnpjPattern.js'
import { parseChunk } from '../parseChunk.js'


export const cnpj = (chunk) => {
  const result = parseChunk(chunk, pattern);

  return result.replace(/\s/g, "");
}