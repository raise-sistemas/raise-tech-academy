import { companyName } from './chunks/companyName.js'
import { cnpj } from './chunks/cnpj.js'
import { adress } from './chunks/adress.js'

export const company = (chunk) => ({
  name: companyName(chunk),
  cnpj: cnpj(chunk),
  adress: adress(chunk),
})