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

// const totalYears = companies.reduce( (total, company) => total + (company.end - company.start), 0);
//
// console.log(totalYears);

// Combine Methods

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((total, age) => total + age, 0);
//
// console.log(combined);

// CHALLENGE 1: REVERSE A STRING

// function reverseString(str) {
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  ///////////////

  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  ////////////////

  // let revString = '';
  // for(let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  /////////////////

  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  /////////////////

  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

  /////////////////

//   return str.split('').reduce((revString, char) => char + revString, '');
//
//
// }
//
// console.log(reverseString('hello'));


// CHALLENGE 2: VALIDATE A PALINDROME

// function isPalindrome(str) {
//   const revString = str.split('').reverse().join('');
//   return revString === str;
// }
//
// console.log(isPalindrome('racecar'));


// CHALLENGE 3: REVERSE AN INTEGER

// function reverseInt(int) {
//   const revString = int.toString().split('').reverse().join('');
//   return parseInt(revString) * Math.sign(int);
//
// }
//
// console.log(reverseInt(-1234));


// CHALLENGE 4: CAPITALIZE LETTER

// function capializeLetters(str) {
//   const strArr = str.toLowerCase().split(' ');
//
//   for(let i = 0; i < strArr.length; i++) {
//     strArr[i] = strArr[i].substring(0,1).toUpperCase() +
//     strArr[i].substring(1);
//   }
//
//   return strArr.join(' ');

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(function(word) {
  //     return word[0].toUpperCase() + word.substring(1);
  //   }).join(' ');

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map( word => word[0].toUpperCase() + word.substring(1)).join(' ');

//   return str.replace(/\b[a-z]/gi, function(char) {
//     return char.toUpperCase();
//   });
//
// }
//
// console.log(capializeLetters('i love javascript'));


// CHALLENGE 5: MAX CHARACTER

// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = '';
//
//   str.split('').forEach(function(char) {
//     if(charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });
//   for(let char in charMap) {
//     if(charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//
//   return maxChar;
// }
//
// console.log(maxCharacter('aabbbcccc'));


// function fizzBuzz() {
//   for(let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if(i % 3 === 0) {
//       console.log('Fizz');
//     } else if(i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }
//
// console.log(fizzBuzz());


// CHALLENGE 6

// function longestWord(sen) {
//   // Create filtered array
//   const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//
//   // Sort by length
//   const sorted = wordArr.sort((a, b) => b.length - a.length);
//
//   // If multiple words, put into array
//   const longestWordArr = sorted.filter(word => word.length === sorted[0].length);
//
//   // Check if more than one array val
//   if(longestWordArr.length === 1) {
//     return longestWordArr[0];
//   } else {
//     return longestWordArr;
//   }
// }
//
//
// console.log(longestWord('Hello there, my name is PJC1'));


// CHALLENGE 7

// function chunkArray(arr, len) {
//   // // Init chunked arr
//   // const chunkedArr = [];
//   // // Set index
//   // let i = 0;
//   //
//   // // Loop while index is less than the array length
//   // while(i < arr.length) {
//   //   // Slice out from the index to the index + the chunk length and push onto the chuncked array
//   //   chunkedArr.push(arr.slice(i, i + len));
//   //   // Increment by chunk length
//   //   i += len;
//   // }
//   //
//   // return chunkedArr;
//
//   // Init chuncked arr
//   const chunkedArr = [];
//   arr.forEach( (val) => {
//     const last = chunkedArr[chunkedArr.length - 1];
//
//     if(!last || last.length === len) {
//       chunkedArr.push([val]);
//     } else {
//       last.push(val);
//     }
//   });
//   return chunkedArr;
// }
//
// console.log(chunkArray([1,2,3,4,5,6,7], 2));



// CHALLENGE 8

// function flattenArray(arrays) {
//   // return arrays.reduce(function(a,b) {
//   //   return a.concat(b);
//   // });
//
//   // return [].concat.apply([], arrays);
//
//   return
// }
//
// console.log(flattenArray([[1, 2], [3,4], [5,6], [6,7]]));


// CHALLENGE 9

// function isAnagram(str1, str2) {
//  return formatStr(str1) === formatStr(str2);
// }
//
// function formatStr(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('')
// }
//
// console.log(isAnagram('elbow', 'below'));

// CHALLENGE 10

function letterChanges(str) {
  let newStr = str
    .toLowerCase()
    .replace(/[a-z]/gi, function(char) {
      if(char === 'z' || char === 'Z') {
        return 'a';
      } else {
        return String.fromCharCode(char.charCodeAt() + 1);
      }
    });

    newStr = newStr.replace(/[a|e|i|o|u]/gi, function(vowel) {
      return vowel.toUpperCase();
    });

  return newStr;
}

console.log(letterChanges('Hello There'));
