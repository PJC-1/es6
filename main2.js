// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex. addAll(2,5,6,7) === 20

// Solution - ES5 arguments & for loop
// function addAll() {
//   var args = Array.prototype.slice.call(arguments);
//   total = 0;
//   for(let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

// Solution 2 - ...rest & reduce/forEach
function addAll(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

console.log(addAll(2,5,6,7));


// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers.
// A prime number is a whole number greater than 1 whose only factor are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for(let j = 2; j < i; j++) {
      if(i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for(let i = 2; i <= num; i++) {
    if(checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumAllPrimes(10));


// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments.
// Return the leftover numbers in an array
// example: seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1: agruments, indexOf, filter
function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  function filterArray(arr) {
    // Return true if NOT in array
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filterArray);
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

//Solution 2: ...rest, filter & includes

// function seekAndDestroy(arr, ...rest) {
//   reutrn arr.filter(val => !rest.includes(val));
// }


//CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// example
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];
  a.forEach((val, i) => {
    if(val === -1) {
      arr1.push(i);
    } else {
      arr2.push(val);
    }
  });

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));


// GET INITIALS
// Challenge is to parse a javascript string in order to obtain the initals of that string.
// example: "John F Kennedy"
// output: "JFK"

// es5 solution
// function getInitials(name) {
//   let initials = "";
//   let waitingForSpace = false;
//
//   for(var i = 0; i < name.length; i++) {
//     if(!waitingForSpace) {
//       initials += name[i];
//       waitingForSpace = true;
//     }
//
//     if(name[i] === " ") {
//       waitingForSpace = false;
//     }
//   }
//
//   return initials;
// }

// es6 Solution
function getInitials(name) {
  return name.split(" ")
    .map(word => {
      return word[0];
    })
    .join('');
}

console.log(getInitials("John F Kennedy"));

// CHECK FOR PALINDROMES
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward
// ignoring puctuation, case, and spacing.

function palindrome(str) {
  var reg = /[\W_]/g;
  var smallStr = str.toLowerCase().replace(reg, "");
  var reversed = smallStr.split("").reverse().join("");
  console.log(reversed);
  if(reversed === smallStr) {
    return true;
  }
  return false;
}

// returns true
console.log(palindrome("_e ye"));


// FIND THE LONGEST WORD IN A STRING
// Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
  var words = str.split(" ");
  var longest = "";

  for(var word of words) {
    if(word.length > longest.length) {
      longest = word;
    }
  }

  return longest.length;

}

// returns 6
findLongestWord("The quick brown fox jumped over the lazy dog");

//solution using sort
function findLongestWord(str) {
  return str.split(" ").sort(function(a, b) {
    return b.length - a.length;
  })[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// TITLE CASE A SENTENCE
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// Also capitalize connecting words like "the" and "of".

// es5 solution
function titleCase(str) {
  var words= str.toLowerCase().split(" ");
  for(var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}


// solution using map
function titleCase(str) {
  var titled = str.toLowerCase().split(" ").map(function(element) {
    return element[0].toUpperCase() + element.slice(1);
  });

  return titled.join(" ");
}

// returns "Hello World"
titleCase("hEllo wOrld");

// RETURN LARGEST NUMBERS IN ARRAYS
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.


// nested for loop solution
// function largestOfFour(arr) {
//   var maxes = [];
//
// for(var i = 0; i < arr.length; i++) {
//   var tempMax = arr[i][0];
//     for(var j = 0; j < arr[i].length; j++) {
//       var currentElement = arr[i][j];
//       if(currentElement >= tempMax) {
//         tempMax = currentElement;
//       }
//     }
//     maxes.push(tempMax);
//   }
//   return maxes;
// }

// solution 2
// function largestOfFour(arr) {
//   var maxes = [0, 0, 0, 0];
//
//   for(var i = 0; i < arr.length; i++) {
//     for(var j = 0; j < arr[i].length; j++) {
//       var currentElement = arr[i][j];
//       if(currentElement >= maxes[i]) {
//         maxes[i] = currentElement;
//       }
//     }
//   }
//   return maxes;
// }

// solution 3
function findMax(arr) {
  var max = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > max) max = arr[i];
  }
  return max;
}

function largestOfFour(arr) {
  var maxes = [];
  for(var i = 0; i < arr.length; i++) {
    var innerMax = findMax(arr[i]);
    maxes.push(innerMax);
  }
  return maxes;
}

// outputs [5, 27, 39, 1001]
console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]));

// CONFIRM THE ENDING
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// substr solution
function confirmEnding(str, target) {
  if(str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

// slice solution
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

console.log(configrmEnding("Bastian", "n"));

// REPEAT A STRING REPEAT A STRING
// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a postive number.

// for loop solution
function repeatStringNumTimes(str, num) {
  var result = '';
  if(num < 0) {
    return '';
  }

  for(var i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

// recursion solution
function repeatStringNumTimes(str, num) {
  if(num < 0) return "";

  // base case
  if(num === 1) return str;

  return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);


// TRUNCATE A STRING
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Note that instering the three dots to the end will add to the string length.
// If the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
  if(num >= str.length) return str;
  if(num <= 3) return str.slice(0, num) + "...";
  return str.slice(0, num - 3) + "...";
}

// output "A-tisket..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
// output the whole string argument
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length ));
// output "hel..."
console.log(truncateString("hello world", 3));

// CHUNKY MONKEY
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimentional array.

// slice solution
function chunkArrayInGroup(arr, size) {
  var groups = [];

  while(arr.length > 0) {
    groups.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return groups;
}

// splice solution
function chunkArrayInGroup(arr, size) {
  var groups = [];

  while(arr.length > 0) {
    groups.push(arr.splice(0, size));
  }
  return groups;
}

// outputs [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkArrayInGroup(["a", "b", "c", "d"], 2));


// SLASHER FLICK
// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

// returns [3]
console.log(slasher([1, 2, 3], 2));


// MUTATIONS
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are presend in "Alien".

// indexOf solution
function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  for(var i = 0; i < secondWord.length; i++) {
    if(firstWord.indexOf(secondWord[i]) === -1) return false;
  }
  return true;
}

// for of loop, indexOf solution
function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  for( var letter of secondWord) {
    if(firstWord.indexOf(letter) === -1) return false;
  }

  return true;
}


// for of loop, includes solution
function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  for( var letter of secondWord) {
    if(!firstWord.includes(letter)) return false;
  }

  return true;
}



// returns false
console.log(mutation([]"hello", "hey"]));

// FALSY BOUNCER
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// for of loop solution
function bouncer(arr) {
  var result = [];
  for(var item of arr) {
    if(item) {
      result.push(item);
    }
  }
  return result;
}

// filter solution
function bouncer(arr) {
  return arr.filter(val => val);
}

// returns [7, "ate", 9]
console.log(bouncer([7, "ate", "", false, 9]));
