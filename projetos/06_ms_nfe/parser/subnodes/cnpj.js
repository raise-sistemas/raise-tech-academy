import pattern from '../../stringPatterns/company/cnpjPattern.js'
import { parseChunk } from '../parseChunk.js'


export const cnpj = (chunk) => {
  const innerChunk = parseChunk(chunk, pattern);

  return innerChunk.replace(/\s/g, "");
}