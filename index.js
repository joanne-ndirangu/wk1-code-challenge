// Student Grade Generator

const marks = prompt("Please enter a marks(between 0 and 100):");

console.log(marks)

if (marks>79) {
    grade = "A";
} else if (marks>=60 && marks<=79) {
    grade = "B";
} else if (marks>=49 && marks<=59) {
    grade = "C";
} else if (marks>=40 && marks<=49) {
    grade = "D";
} else {
    grade = "E";
}

console.log(`Grade: ${grade}`);
document.write(`Student grade: ${grade}`)

