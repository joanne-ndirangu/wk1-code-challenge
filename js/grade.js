// Student Grade Generator
function grade(){
    const marks = prompt("Enter student marks(between 0 and 100):"); //prompts user to enter student marks when the webpage loads

const minLimit = 0;
const maxLimit = 100;      //marks entered should be between 0 and 1

console.log(marks);

if (marks>79) {            //student marks grading system
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

if (marks < minLimit || marks > maxLimit) {
    alert("Invalid input! Please enter a number between 0 and 100.");  //prompts user to enter a number between 0 and 100 if marks entered are not within limits set
  } else {
    console.log(`Grade: ${grade}`);
    document.write(`Student grade: ${grade}`)   //outputs student grade
  }

}
// const marks = prompt("Enter student marks(between 0 and 100):"); //prompts user to enter student marks when the webpage loads

// const minLimit = 0;
// const maxLimit = 100;      //marks entered should be between 0 and 1

// console.log(marks);

// if (marks>79) {            //student marks grading system
//     grade = "A";
// } else if (marks>=60 && marks<=79) {
//     grade = "B";
// } else if (marks>=49 && marks<=59) {
//     grade = "C";
// } else if (marks>=40 && marks<=49) {
//     grade = "D";
// } else {
//     grade = "E";
// }

// if (marks < minLimit || marks > maxLimit) {
//     alert("Invalid input! Please enter a number between 0 and 100.");  //prompts user to enter a number between 0 and 100 if marks entered are not within limits set
//   } else {
//     console.log(`Grade: ${grade}`);
//     document.write(`Student grade: ${grade}`)   //outputs student grade
//   }
