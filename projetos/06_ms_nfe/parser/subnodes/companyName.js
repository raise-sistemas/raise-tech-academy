import pattern from '../../stringPatterns/company/companyNamePattern.js'
import { parseChunk } from '../parseChunk.js'

export const companyName = (chunk) => {
  return parseChunk(chunk, pattern);
}