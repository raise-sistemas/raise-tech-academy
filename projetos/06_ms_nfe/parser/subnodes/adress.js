import { adressPattern } from '../../stringPatterns/storePattern.js'
import { parseChunk } from '../parseChunk.js'

export const adress = (chunk) => {
  const innerChunk = parseChunk(chunk, adressPattern);
  
  const adressArray = innerChunk.replace(/\t/g, "").replace(",,", ",").split(",");

  const [ street, adressNumber, neighbourhood, city, state ] = adressArray;

  return {
    street,
    adressNumber: parseInt(adressNumber),
    neighbourhood,
    city,
    state,
  }
}