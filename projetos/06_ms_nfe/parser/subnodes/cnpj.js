import { cnpjPattern } from '../../stringPatterns/storePattern.js'
import { parseChunk } from '../parseChunk.js'


export const cnpj = (chunk) => parseChunk(chunk, cnpjPattern);
