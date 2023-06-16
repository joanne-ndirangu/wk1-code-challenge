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




// Speed Detector

function speedDetector(speed) {
    if (speed<=70) {
        return "Ok";
    }
}

// const speedLimit = 70;
// const speed1 = speed-speedLimit

// const points = 0;

// if (speed1<=5) {
//     return (Points:1);
// } else {
//     for (let i = 0; i > 9; i++) {
//         points = points + i;
//       }
//     console.log(speed1/5)
//     console.log(`Points:${points}`);
// }

// if (points >= 12) {
//     console.log(`License suspended`)
// }

// function calculateDemeritPoints(speed) {
//     const speedLimit = 70;
//     const kmPerDemeritPoint = 5;

//     if (speed < speedLimit) {
//       console.log("Ok");
//     } else {
//       const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
//       console.log("Demerit Points:", demeritPoints);

//       if (demeritPoints >= 12) {
//         console.log("License suspended");
//       }
//     }
//   }


// Net Salary Calculator
