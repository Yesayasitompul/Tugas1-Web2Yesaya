function camelcase(s: string): number {
  // If string is empty, return 0
  if (s.length === 0) return 0;

  // Count uppercase letters (each represents a new word)
  // Add 1 to account for the first word which starts with lowercase
  let wordCount = 1;

  for (let char of s) {
    if (char === char.toUpperCase()) {
      wordCount++;
    }
  }

  return wordCount;
}

// Test the function with the sample input
console.log(camelcase("saveChangesInTheEditor")); // Should output: 5
