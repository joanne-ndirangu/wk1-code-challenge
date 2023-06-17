// Student Grade Generator

const marks = prompt("Enter student marks(between 0 and 100):"); //prompts user to enter student marks when the webpage loads

const minLimit = 0;
const maxLimit = 100;      //marks entered should be between 0 and 1

console.log(marks)

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

if (marks < 0 || marks > 100) {
    alert("Invalid input! Please enter a number between 0 and 100.");  //prompts user to enter a number between 0 and 100 if marks entered are not within limits set
  } else {
    console.log(`Grade: ${grade}`);
    document.write(`Student grade: ${grade}`)   //outputs student grade
  }




// Speed Detector

function calculateDemeritPoints(speed) {
   const speedLimit = 70;       //any speed above this gets demerit points
   let demeritPoints = 0;       //default points

    if (speed <= speedLimit) {        //only if speed limit is not exceeded
        console.log(`Ok`)
        document.write(`Ok`)
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);    //if speed limit is exceeded calculate demerit points
  }

        if (demeritPoints > 12) {
            console.log("License suspended")
            document.write("License suspended")
        } else {
           Math.floor(demeritPoints);              //math.floor rounds decimal numbers down to the nearest whole number
            console.log(`Points:${demeritPoints}`)
            document.write(`Points:${demeritPoints}`)    //prints demerit points
        }
    }




// Net Salary Calculator

