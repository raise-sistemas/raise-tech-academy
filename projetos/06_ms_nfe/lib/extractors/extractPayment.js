import { fmtDecimal } from '../fmtDecimal.js';

export function extractPayment(html) {
  const methodPattern = /class="tx">(.*?)</g;
  const amountPattern = /class="tx">.*?"totalNumb">(.*?)</g;

  const methods = [...html.matchAll(methodPattern)]
  const amounts = [...html.matchAll(amountPattern)]

  const payment = methods.map((method, index) => ({
    method: method[1],
    amount: fmtDecimal(amounts[index][1])
  }));

  return payment;
}