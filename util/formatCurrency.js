export function formatCurrency(number, currencyCode) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currencyCode,
  }).format(number);
}
