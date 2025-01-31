function birthdayCakeCandles(candles: number[]): number {
  // Find the maximum height
  const maxHeight = Math.max(...candles);

  // Count how many candles have the maximum height
  const count = candles.filter((height) => height === maxHeight).length;

  // Log the results
  console.log("Candle heights:", candles);
  console.log("Tallest height:", maxHeight);
  console.log("Number of tallest candles:", count);

  return count;
}

// Test the function with the sample input
const candles = [3, 2, 1, 3];

console.log("\nTest Case:");
console.log("Result:", birthdayCakeCandles(candles));

// Additional test case from the example in the problem
const example = [4, 4, 1, 3];
console.log("\nExample Case:");
console.log("Number of candles:", example.length);
console.log("Result:", birthdayCakeCandles(example));
