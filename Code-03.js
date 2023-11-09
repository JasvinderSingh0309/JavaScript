var originalPrice = 799;
var calculateDiscountedPrice;
// suppose 60% discount
calculateDiscountedPrice = originalPrice - ( Math.round(799 * (0.60)) );
console.log(calculateDiscountedPrice);

console.log(Math.round(-2.51)); // rounds to nearest I, floor to<, ceil to>