const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

// companies.forEach(function(company) {
//   console.log(company.name);
// });

// filter

// Get 21 or Older
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter(age => age >= 21);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === "Retail") {
//     return true;
//   }
// });
// const retailCompanies = companies.filter(company => company.category === 'Retail');

// Get 80's companies

// let eightiesCompanies = [];
// for(var i = 0; i < companies.length; i++){
//   if(companies[i].start >= 1980 && companies[i].start < 1990) {
//     eightiesCompanies.push(companies[i]);
//   }
// }

// const eightiesCompanies = companies.filter(function(company) {
//   if(company.start >= 1980 && company.start < 1990) {
//     return true;
//   }
// });

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
//
// console.log(eightiesCompanies);


// Lasted more than 10 years

// const lastedTenYears = companies.filter(function(company) {
//   if((company.end - company.start) >= 10) {
//     return true;
//   }
// });

// const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
//
// console.log(lastedTenYears);

// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
//
// console.log(testMap);


// Square ages

// const ageSquare = ages.map( age => Math.sqrt(age));
// console.log(ageSquare);

// Age times 2

// const ageTimesTwo = ages.map( age => age * 2);
// console.log(ageTimesTwo);

// Age times 2 and then add 1

// const ageTimesTwoAddOne = ages
//   .map(age => age * 2)
//   .map(age => age + 1);
//
// console.log(ageTimesTwoAddOne);

// sort

// Sort companies by start year

// const sortedCompanies = companies.sort(function(a, b) {
//   if(a.start > b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
//
// console.log(sortedCompanies);

// Sort ages

// const sortAges = ages.sort((a, b) => a - b);
//
// console.log(sortAges);

// reduce

// Add ages

// let ageSum = 0;
// for(var i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce( (total, age) => total + age, 0);
// console.log(ageSum);


// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce( (total, company) => total + (company.end - company.start), 0);

console.log(totalYears);
