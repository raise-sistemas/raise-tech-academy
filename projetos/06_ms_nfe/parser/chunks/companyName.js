import pattern from '../../stringPatterns/company/companyNamePattern.js'

export const companyName = (chunk) => {
  return pattern.exec(chunk)[1];
}