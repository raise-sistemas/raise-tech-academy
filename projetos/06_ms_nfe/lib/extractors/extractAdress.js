import { extractor } from './extractor.js';

function splitAdress(rawAdress) {
  return rawAdress.replace(/\t/g, "").split(",")
}

export function extractAdress(html) {
  const raw = extractor(html, /CNPJ:.*?<div class="text">(.*?)</);

  const [ street, adressNumber, reference, neighbourhood, city, state ] = splitAdress(raw)

  return {
    street,
    adressNumber: parseInt(adressNumber),
    reference,
    neighbourhood,
    city,
    state,
  }
}

