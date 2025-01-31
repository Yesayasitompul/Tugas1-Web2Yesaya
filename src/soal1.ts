function countingValleys(steps: number, path: string): number {
  let altitude = 0; // Current altitude relative to sea level
  let valleys = 0; // Number of valleys traversed
  let inValley = false; // Flag to track if we're currently in a valley

  for (let i = 0; i < steps; i++) {
    const step = path[i];

    // Update altitude based on step direction
    if (step === "U") {
      altitude++;
    } else if (step === "D") {
      altitude--;
    }

    // If we're below sea level, we're in a valley
    if (altitude < 0) {
      inValley = true;
    }

    // If we return to sea level and we were in a valley, count it
    if (altitude === 0 && inValley) {
      valleys++;
      inValley = false;
    }
  }

  return valleys;
}

// Test cases
console.log(countingValleys(8, "UDDDUDUU")); // Output: 1
