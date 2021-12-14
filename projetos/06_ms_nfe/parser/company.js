import { companyName } from './subnodes/companyName.js'
import { cnpj } from './subnodes/cnpj.js'
import { adress } from './subnodes/adress.js'

export const company = (chunk) => ({
  name: companyName(chunk),
  cnpj: cnpj(chunk),
  adress: adress(chunk),
})