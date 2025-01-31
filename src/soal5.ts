function angryProfessor(k: number, a: number[]): string {
  // Count students who arrived on time (arrival time <= 0)
  const onTimeStudents = a.filter((time) => time <= 0).length;

  // If number of on-time students is less than threshold, class is cancelled
  return onTimeStudents >= k ? "NO" : "YES";
}

// Function to handle multiple test cases
function processTestCases(): void {
  // Sample input
  const input = [
    "2", // Number of test cases
    "4 3", // n=4, k=3 (first test case)
    "-1 -3 4 2",
    "4 2", // n=4, k=2 (second test case)
    "0 -1 2 1",
  ];

  let currentLine = 0;

  // Read number of test cases
  const t = parseInt(input[currentLine++]);

  // Process each test case
  for (let i = 0; i < t; i++) {
    // Read n and k
    const [n, k] = input[currentLine++].split(" ").map(Number);

    // Read arrival times
    const a = input[currentLine++].split(" ").map(Number);

    // Process test case and print result
    const result = angryProfessor(k, a);
    console.log(result);
  }
}

// Run the program
processTestCases();
