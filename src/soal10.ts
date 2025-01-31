function twoSum(nums: number[], target: number): number[] {
  // Create a map to store number -> index
  const numMap = new Map<number, number>();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists in map
    if (numMap.has(complement)) {
      console.log("Input:", nums, "target =", target);
      console.log(
        "Found pair:",
        nums[numMap.get(complement)!],
        "+",
        nums[i],
        "=",
        target
      );
      console.log("Output:", [numMap.get(complement)!, i]);
      return [numMap.get(complement)!, i];
    }

    // Add current number and its index to map
    numMap.set(nums[i], i);
  }

  // This should never happen given the problem constraints
  return [-1, -1];
}

// Test cases
console.log("\nTest Case 1:");
twoSum([2, 7, 11, 15], 9);

console.log("\nTest Case 2:");
twoSum([3, 2, 4], 6);

console.log("\nTest Case 3:");
twoSum([3, 3], 6);
