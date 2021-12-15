import { fmtDecimal } from '../fmtDecimal.js';

export function extractPayment(chunk) {
  const methodPattern = /class="tx">(.*?)</g;
  const amountPattern = /class="tx">.*?"totalNumb">(.*?)</g;

  const methods = [...chunk.matchAll(methodPattern)]
  const amounts = [...chunk.matchAll(amountPattern)]

  const payment = methods.map((method, index) => ({
    method: method[1],
    amount: fmtDecimal(amounts[index][1])
  }));

  return payment;
}