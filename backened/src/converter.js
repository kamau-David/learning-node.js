
const exchangeRates = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79
};


export function convertToUSD(amount, currency) {
  const rate = exchangeRates[currency.toUpperCase()];
  
  if (!rate) {
    return "Currency not supported!";
  }

  const result = amount / rate;
  return `$${result.toFixed(2)}`;
}