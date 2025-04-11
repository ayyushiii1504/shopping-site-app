export function toINR(usdPrice) {
    const conversionRate = 83.5; // 1 USD = ₹83.5
    return `₹${Math.round(usdPrice * conversionRate).toLocaleString()}`;
}
  