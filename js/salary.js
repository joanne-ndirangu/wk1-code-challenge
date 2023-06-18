// Net Salary Calculator

const pay = prompt("Enter monthly pay:");

console.log(`Gross Salary: ${pay}`);
document.write(`Gross Salary: ${pay}`)

// PAYE

function paye() {
if (pay <= 24000) {
    paye = (pay * 0.1)
} else if (pay >= 24001 && pay <= 32333) {
    paye = (pay * 0.25)
} else {
    paye = (pay * 0.30);
}
console.log(`PAYE: ${paye}`);
}

// NHIF Deductions
function nhif() {
 if (pay <= 5999) {
    nhif = 150;
 } else if (pay >= 6000 && pay <= 7999) {
    nhif = 300;
 } else if (pay >= 8000 && pay <= 11999) {
    nhif = 400;
 } else if (pay >= 12000 && pay <= 14999) {
    nhif = 500;
 } else if (pay >= 15000 && pay <= 19999) {
    nhif = 600;
 } else if (pay >= 20000 && pay <= 24999) {
    nhif = 750;
 } else if (pay >= 25000 && pay <= 29999) {
    nhif = 850;
 } else if (pay >= 30000 && pay <= 34999) {
    nhif = 900;
 } else if (pay >= 35000 && pay <= 39999) {
    nhif = 950;
 } else if (pay >= 40000 && pay <= 44999) {
    nhif = 1000;
 } else if (pay >= 45000 && pay <= 49999) {
    nhif = 1100;
 } else if (pay >= 50000 && pay <= 59999) {
    nhif = 1200;
 } else if (pay >= 60000 && pay <= 69999) {
    nhif = 1300;
 } else if (pay >= 70000 && pay <= 79999) {
    nhif = 1400;
 } else if (pay >= 80000 && pay <= 89999) {
    nhif = 1500;
 } else if (pay >= 90000 && pay <= 99999) {
    nhif = 1600;
 } else {
    nhif = 1700;
 }
 console.log(`NHIF: ${nhif}`);
}

// NSSF Deductions

const pensionablePay = prompt("Enter pensionable pay")

function nssf() {
    nssf = pensionablePay * 0.6
    console.log(`NSSF: ${nssf}`);
}

// Benefits

// const personalRelief = 2400
// const insuranceRelief = 5000
// const allowablePensionFundContribution = 20000
// const affordableHousingRelief	= 9000
// const allowableOwnerOccupierInterest = 25000
// const disabilityExemption = 150000

// Net Salary
let totalDeductions = (pay + nhif + nssf);

console.log(`Total Deductions: ${totalDeductions}`)

let netSalary =  (pay - totalDeductions);
    console.log(`Net Salary: ${netSalary}`)
    document.write(`Net Salary: ${netSalary}`)