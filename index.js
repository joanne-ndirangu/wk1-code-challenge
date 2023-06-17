// Student Grade Generator

const marks = prompt("Please enter student marks(between 0 and 100):");

const minLimit = 10;
const maxLimit = 100;

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

if (marks < 0 || marks > 100) {
    alert("Invalid input! Please enter a number between 0 and 100.");
  } else {
    console.log(`Grade: ${grade}`);
    document.write(`Student grade: ${grade}`)
  }




// // Speed Detector

function calculateDemeritPoints(speed) {
   const speedLimit = 70;
   let demeritPoints = 0;

    if (speed <= speedLimit) {
        console.log(`Ok`)
        document.write(`Ok`)
    } else {
        demeritPoints = (speed - speedLimit) / 5;
  }

        if (demeritPoints > 12) {
            console.log("License suspended")
            document.write("License suspended")
        } else {
            console.log(`Points:${demeritPoints}`)
            document.write(`Points:${demeritPoints}`)
        }
    }




// Net Salary Calculator
