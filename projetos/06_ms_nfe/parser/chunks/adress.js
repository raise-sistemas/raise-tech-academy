import pattern from '../../stringPatterns/company/adressPattern.js'
import { parseChunk } from '../parseChunk.js'

export const adress = (chunk) => {
  const innerChunk = parseChunk(chunk, pattern);
  
  const adressArray = innerChunk.replace(/\t/g, "").replace(",,", ",").split(",");

  const [ street, adressNumber, neighbourhood, city, state ] = adressArray;

  return {
    street,
    adressNumber,
    neighbourhood,
    city,
    state,
  }
}