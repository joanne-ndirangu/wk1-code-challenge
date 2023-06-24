// Net Salary Calculator
function salary() {
const pay = prompt("Enter gross salary:");

// PAYE

let paye = 0;
if (pay <= 24000) {
    paye = (pay * 0.1)
} else if (pay >= 24001 && pay <= 32333) {
    paye = (pay * 0.25)
} else {
    paye = (pay * 0.30);
}
console.log(`PAYE: ${paye}`);

// NHIF Deductions
let nhif = 0;
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

// NSSF Deductions

const pensionablePay = prompt("Enter pensionable pay")

let nssf = 0;
    nssf = pensionablePay * 0.06
    console.log(`NSSF: ${nssf}`);

// Benefits

// const personalRelief = 2400
// const insuranceRelief = 5000
// const allowablePensionFundContribution = 20000
// const affordableHousingRelief	= 9000
// const allowableOwnerOccupierInterest = 25000
// const disabilityExemption = 150000

const benefits = prompt("Enter contibution benefit:");
console.log(`Benefits: ${benefits}`);

//Personal relief
let relief = 2400;
console.log(`${relief}`)

// Net Salary
let totalDeductions = (paye + nhif + nssf);

let taxablePay = pay - benefits;
console.log(`Taxable pay: ${taxablePay}`);

console.log(`Total Deductions: ${totalDeductions}`);

let netSalary =  pay - totalDeductions;
    console.log(`Net Salary: ${netSalary}`);
    console.log(`Gross Salary: ${pay}`);
    console.log(`Personal relief: ${relief}`)

    document.write(`Gross Salary: ${pay}`)
    document.write(`Contribution benefit: ${benefits}`);
    document.write(`Taxable pay: ${taxablePay}`);
    document.write(`Personal relief: ${relief}`)
    document.write(`Total Deductions: ${totalDeductions}`);
    document.write(`PAYE: ${paye}`);
    document.write(`Net Salary: ${netSalary}`);
}