function climbStairs(n: number): number {
  // Base cases
  if (n <= 1) return 1;
  if (n === 2) return 2;

  // Initialize array untuk menyimpan jumlah cara
  let dp: number[] = new Array(n + 1);
  dp[1] = 1; // Untuk 1 step
  dp[2] = 2; // Untuk 2 steps

  // Calculate untuk n > 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Test cases
console.log("Example 1:");
console.log("Input: n =", 2);
console.log("Output:", climbStairs(2));
console.log("Explanation: There are two ways to climb to the top.");
console.log("1. 1 step + 1 step");
console.log("2. 2 steps");
console.log("\nExample 2:");
console.log("Input: n =", 3);
console.log("Output:", climbStairs(3));
console.log("Explanation: There are three ways to climb to the top.");
console.log("1. 1 step + 1 step + 1 step");
console.log("2. 1 step + 2 steps");
console.log("3. 2 steps + 1 step");
