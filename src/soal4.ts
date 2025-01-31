function staircase(n: number): void {
  // Loop through each row
  for (let i = 1; i <= n; i++) {
    // Calculate spaces and hashes needed
    let spaces = n - i;
    let hashes = i;

    // Create the line by concatenating spaces and hashes
    let line = " ".repeat(spaces) + "#".repeat(hashes);

    // Print the line
    console.log(line);
  }
}

// Test cases
console.log("Test with n = 4:");
staircase(4);

console.log("\nTest with n = 6:");
staircase(6);
