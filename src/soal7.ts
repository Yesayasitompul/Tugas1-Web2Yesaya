function plusMinus(arr: number[]): void {
    let positives: number = 0;
    let negatives: number = 0;
    let zeros: number = 0;
    const n: number = arr.length;
  
    // Count positives, negatives, and zeros
    for (let num of arr) {
      if (num > 0) positives++;
      else if (num < 0) negatives++;
      else zeros++;
    }
  
    // Calculate ratios and print with 6 decimal places
    console.log((positives / n).toFixed(6));
    console.log((negatives / n).toFixed(6));
    console.log((zeros / n).toFixed(6));
  }
  
  // Test the function with sample input
  const arr = [-4, 3, -9, 0, 4, 1];
  plusMinus(arr);