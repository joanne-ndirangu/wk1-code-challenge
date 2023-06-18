# CODE CHALLENGE

## Description
This is a series of programs that meet the objectives set. The programs test your knowledge in javascript and apply things we've been taught so far.

### Objectives
1. Student Grade Generator -
Should prompt the user to input student marks between 0 and 100 and output the corresponding grade based on given grading system.
2. Speed Detector -
Takes the speed of a car as input. If the speed is less than 70 it should print "Ok". Otherwise, for every 5km/s above the speed limit which is 70, the driver should get one demerit point and the total number of demerit points printed. If the driver gets more than 12 points, the function should print "License suspended"
3. Net Salary Calculator -
The program should calculate an individual's net salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. The following links should be used for values:
https://www.aren.co.ke/payroll/taxrates.htmLinks

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks

## Project Setup
### Student Grade Generator
As soon as we run the webpage on our browser the user should be prompted to enter the student's marks. For this we use the ```js propmt``` below which displays "Enter student marks(between 0 and 100):" on the screen immediately the webpage runs.
```js
const marks = prompt("Enter student marks(between 0 and 100):");
```
The program then refers to the grading system entered using the "else if" conditio to output the correct student grade.
If the marks entered are lower or higher than the set range of 0 to 100, the user receives an alert to enter a number within the specified range as the one entered is invalid.
If the all the input specifications are met the student's grade is printed on the browser.

### Speed Detector
Run the webpage on your browser and you should get a prompt to enter your speed. The speed is then returned to the console for the necessary point calculations.
The set demerit points are 0 for all drivers but increase for every 5km/h above the set speed limit. If the speed is 70, "Ok" is printed out but if the speed limit is exceeded the demerit points are issued based on what the speed is.
Using the ```js Math.floor``` command rounds down the points to the nearest whole number e.g if the speed is 123 the points printed are 10 and not 10.6.
If the speed generates demerit points that exceed 12, "License suspended" is printed.

### Net Salary Calculator
As soon as you run the webpage you will be prompted to enter your monthly pay and pensionable pay. The pensionable pay calculation of your nssf deduction. The monthly pay entered will be displayed on the webpage as the gross pay which is the salary before any deductions are made.
The monthly pay is then used to determine the PAYE, NHIF and NSSF which are deductions to be made from the gross salary. The deductions are then added together to produce the total deductions. The total deductions are deducted from the gross salary to give the net salary.

## Author
This project is created by Joanne Ndirangu.

## license
The project is licensed under the MIT License.