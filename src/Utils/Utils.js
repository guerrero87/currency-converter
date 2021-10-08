export function getYear() {
  return new Date().getFullYear();
}

export function formatAsCurrency(number, currencyCode) {
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: currencyCode,
  });
}
