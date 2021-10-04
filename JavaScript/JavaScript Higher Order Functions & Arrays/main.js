const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Auto", start: 1981, end: 2008},
    {name: "Company Three", category: "Retail", start: 1995, end: 2016},
    {name: "Company Four", category: "Technology", start: 1989, end: 2021},
    {name: "Company Five", category: "Finance", start: 1941, end: 1978},
    {name: "Company Six", category: "Finance", start: 1951, end: 2005},
    {name: "Company Seven", category: "Retail", start: 1991, end: 1995},
    {name: "Company Eight", category: "Technology", start: 1971, end: 2000},
    {name: "Company Nine", category: "Auto", start: 1983, end: 2019},
];

const ages = [33, 12, 34, 56, 98, 35, 21, 10, 43, 60, 99, 33, 21, 23, 68, 82, 93, 12, 13, 19];

// ********** FOR LOOP ******************
for(i = 0; i < companies.length; i++) {
    // console.log(companies[i]);
}

for(i = 0; i < ages.length; i++) {
    // console.log(ages[i]);
}

// ************ FOREACH *****************
// we can get the iterator, index or entire array 
// companies.forEach(function(company, index, companies){
   companies.forEach(function(company){
    // console.log(company)
});

// ************ FILTER *******************
// We want to filter all the ages that are 21 and over - let us first use a for loop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// 1. Define a variable
// const canDrink = ages.filter(function(age) {
// 2. Define the logic
//     if(age >= 21) {
//         return true;
//     }
// });

// Using ES6 to make it cleaner
const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// Let us filter all the retail companies using Filter

// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// Let us filter out all the companies that started in the 80s
// const eightyCompanies = companies.filter(function(company) {
//     if(company.start >= 1980 && company.start <= 1989) {
//         return true;
//     }
// });

const eightyCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989);
// console.log(eightyCompanies);

// We want to filter out all the companies that lasted 10 years or more
const lastedCompanies = companies.filter(function(company) {
    if(company.end - company.start >= 10) {
        return true;
    }
});

// const lastedCompanies = companies.filter(company => company.end - company.start >= 10);
console.log(lastedCompanies);

// ****************************** MAP **********************************
// Create an array of company names 
const companyNames = companies.map(function(company) {
    return company.name;
});
console.log(companyNames);

// Create an array of the companies start and end dates
// const companyDates = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

const companyDates = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyDates);

// Create an array with even numbers
// const evenNumbers = ages.map(function(age) {
//     if(age % 2 == 0) {
//         return age;
//     }else{
//         return 'Odd Number';
//     }
// });

const evenNumbers = ages.map(age => age % 2 == 0 ? age : 'Odd number');

// console.log(evenNumbers);

// ************** SORT *****************************
// Sort companies by the start year
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     }else {
//         return -1;
//     }
// });

const sortedCompanies = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1 );

console.log(sortedCompanies);

// Sort the ages 
const sortedAges = ages.sort((n1, n2) => n1 - n2);
console.log(sortedAges)

// ****************************** REDUCE ************************
// Add all the ages together 
// Use a For Loop - first to see how it works
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);

// Get total years of all companies
// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears);

// We can combine all the methods as well
const combined = ages   
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a - b)
    .reduce((a,b) => a + b);

console.log(combined);