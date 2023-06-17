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

// console.log(`Speed:${Ok}`)
// document.write(`Speed:${speed}`)

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

// const calculate_demerit_points(speed)
//     speed_limit = 70
//     points_per_km_over = 5
//     max_demerit_points = 12

//     if (speed <= speed_limit) {
//        return "Ok"
//     }

//     demerit_points = (speed - speed_limit) // points_per_km_over

//     if (demerit_points > max_demerit_points) {
//         print("License suspended")
//     } else:
//         print("Points:", demerit_points)


// // Net Salary Calculator
// const basicSalary = prompt("Please enter basic salary:");
// const benefits = prompt("Please enter benefits:");

// console.log(basicSalary)
// console.log(benefits)

// function calculateNetSalary(basicSalary, benefits) {
//     const taxRates = [
//       // Tax rates based on income brackets
//       bracket1: { rate: 10, limit: 24000 },
//       bracket2: { rate: 15, limit: 40216 },
//       bracket3: { rate: 20, limit: 57576 },
//       bracket4: { rate: 25, limit: 75760 },
//       bracket5: { rate: 30, limit: Infinity }
//     ];

//     const nhifRates = {
//       // NHIF rates based on income brackets
//       bracket1: 150,
//       bracket2: 300,
//       bracket3: 400,
//       bracket4: 500,
//       bracket5: 600,
//       bracket6: 750
//     };

//     const nssfRates = {
//       // NSSF rates based on income brackets
//       bracket1: 6,
//       bracket2: 6,
//       bracket3: 6
//     };

//     // Calculate Gross Salary
//     const grossSalary = basicSalary + benefits;

//     // Calculate Payee (Tax)
//     let payee = 0;
//     for (const [bracket, rateData] of Object.entries(taxRates)) {
//       const { rate, limit } = rateData;
//       if (grossSalary <= limit) {
//         payee = (grossSalary * rate) / 100;
//         break;
//       }
//     }

//     // Calculate NHIF Deductions
//     let nhifDeductions = 0;
//     for (const [bracket, rate] of Object.entries(nhifRates)) {
//       if (grossSalary <= limit) {
//         nhifDeductions = rate;
//         break;
//       }
//     }

//     // Calculate NSSF Deductions
//     let nssfDeductions = 0;
//     for (const [bracket, rate] of Object.entries(nssfRates)) {
//       nssfDeductions = (grossSalary * rate) / 100;
//       break;
//     }

//     // Calculate Net Salary
//     const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

//     // Output the results
//     console.log("Gross Salary:", grossSalary);
//     console.log("Payee (Tax):", payee);
//     console.log("NHIF Deductions:", nhifDeductions);
//     console.log("NSSF Deductions:", nssfDeductions);
//     console.log("Net Salary:", netSalary);
//   }

//   // Example usage
//   calculateNetSalary(50000, 10000);