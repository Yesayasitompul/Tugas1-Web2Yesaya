function gradingStudents(grades: number[]): number[] {
    return grades.map(grade => {
        console.log(`Processing grade: ${grade}`);
        
        // If grade is less than 38, no rounding occurs
        if (grade < 38) {
            console.log(`Grade ${grade} is below 38, no rounding needed`);
            return grade;
        }

        // Find the next multiple of 5
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        console.log(`Next multiple of 5 for ${grade} is ${nextMultipleOf5}`);
        
        // If the difference is less than 3, round up
        if (nextMultipleOf5 - grade < 3) {
            console.log(`Difference (${nextMultipleOf5 - grade}) is less than 3, rounding ${grade} up to ${nextMultipleOf5}`);
            return nextMultipleOf5;
        }

        console.log(`Difference (${nextMultipleOf5 - grade}) is 3 or more, keeping original grade ${grade}`);
        return grade;
    });
}

// Test the function with sample input
const grades = [73, 67, 38, 33];
console.log('\nInput grades:', grades);
const result = gradingStudents(grades);
console.log('\nFinal grades:', result);
