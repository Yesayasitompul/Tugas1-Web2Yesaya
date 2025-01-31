function isPalindrome(x: number): boolean {
  // Convert to string to handle negative numbers properly
  const numStr = Math.abs(x).toString();

  // If number is negative, it's not a palindrome
  if (x < 0) return false;

  // Compare characters from start and end
  let left = 0;
  let right = numStr.length - 1;

  while (left < right) {
    if (numStr[left] !== numStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Test cases
console.log("Test Case 1:");
console.log("Input: x =", 121);
console.log("Output:", isPalindrome(121));
console.log(
  "Explanation: 121 reads as 121 from left to right and from right to left."
);
console.log();

console.log("Test Case 2:");
console.log("Input: x =", -121);
console.log("Output:", isPalindrome(-121));
console.log(
  "Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
);
console.log();

console.log("Test Case 3:");
console.log("Input: x =", 10);
console.log("Output:", isPalindrome(10));
console.log(
  "Explanation: Reads 01 from right to left. Therefore it is not a palindrome."
);
