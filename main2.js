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

//Solution 3: splice, for of, push
function seekAndDestroy(arr) {
  var args = Array.from(arguments);
  args.splice(0, 1);
  var targets = args;
  var result = [];

  for(var num of arr) {
    if(targets.indexOf(num) === -1) {
      result.push(num);
    }
  }

  return result;
}

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


// WHERE DO I BELONG
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
 function getIndexToIns(arr, num) {
   arr.sort(function(a, b) {
     return a - b;
   });
   for(var i = 0; i < arr.length; i++) {
     if(num <= arr[i]) {
       return i;
     }
   }
   return arr.length;
 }

 console.log(getIndexToIns([40, 60], 50));

// CAESARS CIPHER
// One of the simplest and most widely known ciphers is a Caesar cipher, also known
// as a shift cipher.
// In a shit cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus "A" <-> "N", "B" <-> "O" and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be upperase. Do not transform any non-alphabetic characters (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
  var solved = "";
  for(var i = 0; i < str.length; i++) {
    var asciiNum = str[i].charCodeAt();
    if(asciiNum >= 65 && asciiNum <= 77) {
      solved += String.fromCharCode(asciiNum + 13);
    } else if(asciiNum >= 78 && asciiNum <= 90) {
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      solved += str[i];
    }
  }
  return solved;
}

// [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
console.log(rot13("URYYB JBEYQ"));


// SUM ALL NUMBERS IN A RANGE
// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
function sumAll(arr) {
  var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);
  var total = 0;

  for(var i = start; i < end; i++) {
    total += i;
  }

  return total;
}

// returns 6
console.log(sumAll([1, 4]));

// DIFF TWO ARRAYS
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

// for loop solution
function diffArray(arr1, arr2) {
  var result = [];

  for(var i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }

  for(var j = 0; j < arr2.length; j++) {
    if(arr1.indexOf(arr2[j]) === -1) {
      result.push(arr2[j]);
    }
  }

  return result;
}

// filter solution
function diffArray(arr1, arr2) {
  var combo = arr1.concat(arr2);

  return combo.filter(function(num) {
    if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
      return num;
    }
  });
}

// return [7, 4]
console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]));

// ROMAN NUMERAL CONVERTER
// Convert the given number into roman numeral
function convertToRoman(num) {
  var romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  var roman = "";

  for(var key in romanToNum) {
    while(num >= romanToNum[key]) {
      roman += key;
      num -= romanToNum[key];
    }
  }

  return roman;
}

// returns XXXVI
console.log(convertToRoman(36));

// WHEREFORE ART THOU
// MAKE A FUNCTION THAT LOOKS THROUGH AN ARRAY OF OBJECTS (FIRST ARGUMENT) AND RETURNS AN ARRAY OF ALL OBJECTS THAT HAVE MATCHING PROPERTY AND VALUE PAIRS (SECOND ARGUMENT).
// EACH PROPERTY AND VALUE PAIR OF THE SOURCE OBJECT HAS TO BE PRESENT IN THE OBJECT FROM THE COLLECTION IF IT IS TO BE INCLUDED IN THE RETURNED ARRAY.
// FOR EXAMPLE, IF THE FIRST ARGUMENT IS [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, {first: "Tybalt", last: "Capulet" }], AND THE SECOND ARGUMENT IS { last: "Capulet" }
// THEN YOU MUST RETURN THE THIRD OBJECT FROM THE ARRAY (THE FIRST ARGUMENT), BECAUSE IT CONTAINS THE PROPERTY AND ITS VALUE, THAT WAS PASSED ON AS THE SECOND ARGUMENT.
function whatIsInAName(collection, source) {
  var keys = Object.keys(source);

  return collection.filter(function(obj) {
    for(var key of keys) {
      if(!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

// returns [ { first: 'Tybalt', last: 'Capulet' } ]
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, {first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// SEARCH AND REPLACE
// Perform search and replace on the sentence using the arguments provided and return the new sentence
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replace as "Dog".
function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }

  return str.replace(before, after);
}

function myReplace(str, before, after) {
  var words = str.split(" ");
  if(before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }

  for(var i = 0; i < words.length; i++) {
    if(words[i] === before) {
      words[i] = after;
    }
  }

  return words.join(" ");
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

// PIG LATIN
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or sonsonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

// Solution with regular expressions
function translatePigLatin(str) {
  var firstVowel = str.match(/[aeiou]/);
  var firstPosition = str.indexOf(firstVowel);

  if(firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
  }

  return str + "way";
}

// Solution without regular expressions
function translatePigLatin(str) {
  var firstPosition = findFirstVowelPosition(str);
  if(firstPosition > 0) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + "ay";
  }
  return str + "way";
}

function findFirstVowelPosition(str) {
  for(var i = 0; i < str.length; i++) {
    if("aeiou".indexOf(str[i]) !== -1) {
      return i;
    }
  }
}

// onsonantcay
console.log(translatePigLatin("consonant"));

// DNA PAIRING
// The DNA strand is missing the pairing element.
// Take each character, get its pair, and return the results as a 2nd array.
// Base pairs are a pair of AT and CG.
// Matach the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C", "G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pair(str) {
  str = str.toUpperCase();
  str = str.split("");
  var placeHolderArray = [];
  for(var i = 0; i < str.length; i++) {
    if(str[i] == "G") {
      placeHolderArray.push(["G", "C"]);
    } else if(str[i] == "C") {
      placeHolderArray.push(["C", "G"]);
    } else if(str[i] == "A") {
      placeHolderArray.push(["A", "T"]);
    } else if(str[i] == "T") {
      placeHolderArray.push(["T", "A"]);
    }
  }
  str = placeHolderArray;
  return str;
}

// returns [ [ 'T', 'A' ], [ 'A', 'T' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
console.log(pair("TACG"));

// UNIQUE EMAIL ADDRESS
// Every email consists of a local name and a domain name, separated by the @ sign.
// For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.
// Besides lowercase letters, these emails may contain '.'s or '+'s.
// If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)
// If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)
// It is possible to use both of these rules at the same time.
// // Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails?
// Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

var numUniqueEmails = function(emails) {
  var evaluatedArray = [];
  for(var email of emails) {

    var domain = email.substring(email.indexOf("@"), email.length);
    console.log("domain => ", domain);

    var noPlus = email.slice(0, email.indexOf("+"));
    console.log("email without plus => ", noPlus);

    var removeDot = noPlus.replace(/\./g, "");
    console.log("removed dot => ", removeDot);

    var final = removeDot.concat(domain);
    console.log("final => ", final);

    if(evaluatedArray.indexOf(final) === -1) {
      evaluatedArray.push(final);
    }
  }

  return evaluatedArray.length;
};

// returns 2
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));


// TO LOWER CASE
// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
//
// Example 1:
//
// Input: "Hello"
// Output: "hello"
// Example 2:
//
// Input: "here"
// Output: "here"
// Example 3:
//
// Input: "LOVELY"
// Output: "lovely"

// solution wihout built-in toLowerCase() method
var toLowerCase = function(str) {
  var result = "";

  for(var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      result = result + String.fromCharCode(str.charCodeAt(i) + 32);
    } else {
      result = result + str[i];
    }
  }

  return result;
};

// returns "hello world"
console.log(toLowerCase("HELLO WORLD"));


// MISSING LETTERS
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {

    // use toLowerCase() incase mixed-casing is passed into the function
    str = str.toLowerCase();

    // find the ascii code for the first position of the passed in string
    var firstAscii = str[0].charCodeAt();

    // find the letter of the passed in string's first character position
    var firstChar = String.fromCharCode(str[0].charCodeAt());

    // loop through the length of the passed in string
    for(var i = 0; i < str.length; i++) {

        // this variable calculates the character based on the sum of the starting ascii code and the index
        var asciiChar = String.fromCharCode(firstAscii + i);

        // compare the character of the passed in string to what the ascii character
        if(str[i] !== asciiChar) {

            // if the character of the passed in string is not equal to the ascii character, return the ascii character
            return asciiChar;

        }

    }

    // if all letters are present in the range, return undefined
    return undefined;

}

// returns "e"
console.log(fearNotLetter("bcdfg"));


// N-REPEATED ELEMENT IN SIZE 2N ARRAY
// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
//
// Return the element repeated N times.
//
//
//
// Example 1:
//
// Input: [1,2,3,3]
// Output: 3
//
// Example 2:
//
// Input: [2,1,2,5,3,2]
// Output: 2
//
// Example 3:
//
// Input: [5,1,5,2,5,3,5,4]
// Output: 5

var repeatedNTimes = function(A) {

  // total elements in the array => A.length
  // "N times" => A.length / 2
  // "unique elements" int he array => (A.length/2) + 1

  // create an empty object to store the unique elements from the array.
  var map = Object.create(null);

  // loop through the length of the passed in array.
  for(var i = 0; i < A.length; i++) {

    // check if the value of the array element at the specified index exists in the map object.
    if(map[A[i]]) {
      // if the key exists, then return the array element.
      return A[i];
    }

    // if the array element does not exists in the map object, then it is a unique element.
    // add it to the map object.
    map[A[i]] = true;

  }

  // if all elements in the passed in array are unique, then return -1
  return -1;

}

// returns 3
repeatedNTimes([1, 2, 3, 3]);

// UNIQUE MORESE CODE WORDS
// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
//
// For convenience, the full table for the 26 letters of the English alphabet is given below:
//
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
//
// Return the number of different transformations among all words we have.
//
// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
//
// There are 2 different transformations, "--...-." and "--...--.".
// Note:
//
// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

// Return the number of different transformations among all words we have.
//
// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
//
// There are 2 different transformations, "--...-." and "--...--.".
// Note:
//
// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

var uniqueMorseRepresentations = function(words) {
    // array of morse code
    var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    // array of letters
    var alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // new instance of set
    // A Set data structure allows to add data to a container
    var dict = new Set();

    // loop through the passed in array of words
    for(var i = 0; i <= words.length - 1; i++) {
        // empty string to store the word/morse code
        var temp = "";

        // loop through each character of the word[i]
        for(var j = 0; j <= words[i].length - 1; j++) {
            // concatinate the word character's corresponding morse code
            temp = temp.concat(morse[alphabets.indexOf(words[i][j])]);
        }
        // add the transformation (morse code of the word) to the dict set data structure
        dict.add(temp);
    }

    // return the size of the set
    return dict.size;
};


// returns 2
uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);

// BOO HOO
// Check if a value is classified as boolean primitive. Return true or false.
function boo(bool) {
  // the typeof operator returns a string indicating the type of the unevaluated operand.
  if(typeof(bool) === "boolean") {
    return true;
  } else {
    return false;
  }
}

// returns false
console.log(boo(null));


// SORTED UNION
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
function unite(arr1, arr2, arr3) {
  // create a variable to store the file result
  // set it to the first passed array, this can also be set to an empty array
  var placeHolder = arr1;

  // first loop to iterate through the arguments passed into the function
  for(var i = 0; i < arguments.length; i++) {
    // second loop to iterates through each element in the array
    for(var j = 0; j < arguments[i].length; j++) {
      // check if the placeHolder array contains the current element
      if(placeHolder.indexOf(arguments[i][j]) === -1) {
        //
        placeHolder.push(arguments[i][j]);
      }
    }
  }

  // set the arr1 to the placeHolder, returning the placeHolder array is the same result
  arr1 = placeHolder;

  // return arr1 array
  return arr1;
}

// returns [ 1, 2, 3, 5, 4 ]
console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1]));


// CONVERT HTML ENTITIES
// Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.
function convert(str) {
  // convert the passed in string into an array containing each character
  var splitStr = str.split("");
  // loop through the elements/characters in the splitStr array
  for(var char of splitStr) {
    // create a local variable that will store the index of the character being interated
    // in the splitStr array.
    var arrIndex;
    // check if the character being iterated is an ampersand
    if(char === "&") {
      // set the arrIndex (local storage variable) to the index of the iterated character inside the splitStr array.
      arrIndex = splitStr.indexOf(char);
      // set the "&" in the splitStr array to the HTML entity
      splitStr[arrIndex] = "&#38;";
    } else if(char === "<") {
      console.log("found less than");
      arrIndex = splitStr.indexOf(char);
      splitStr[arrIndex] = "&#60;";
    } else if(char === ">") {
      console.log("found greater than");
      arrIndex = splitStr.indexOf(char);
      splitStr[arrIndex] = "&#62;";
    } else if(char === '"') {
      console.log('found double quotation mark');
      arrIndex = splitStr.indexOf(char);
      splitStr[arrIndex] = "&#34;";
    } else if(char === "'") {
      console.log("found single quotation mark");
      arrIndex = splitStr.indexOf(char);
      splitStr[arrIndex] = "&#39;";
    }
  }
  // convert the splitStr array into a string and return it
  return splitStr.join("");
}

// returns "Dolce &#38; Gabanna &#60; &#62; &#34;"
console.log(convert('Dolce & Gabanna < > "'));
// returns "Rocket Joe&#39;s"
console.log(convert("Rocket Joe's"));


// DROP IT
// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
// Return the rest of the array, otherwise return an empty array.
function drop(arr, func) {
  while(!func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// returns [4]
console.log(drop([1,2,3,4], function(n) {return n > 3;}));

// returns [1, 0, 1]
console.log(drop([0,1,0,1], function(n) {return n === 1;}));

// STEAMROLLER
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  // variable used to store result
  var oneArray = [];
  // invoking flatten function with passed in array
  flatten(arr);

  // define flatten function, which takes an array
  function flatten(arr1) {
    console.log("arr1: ", arr1);
    // running for each on the array
    arr1.forEach(function(arr2) {
      console.log("arr2: ", arr2);
      // check if element in the array is an Array
      if(!Array.isArray(arr2)) {
        // if element is not an array then add to storage array
        oneArray.push(arr2);
      } else {
        // if element is an array, then call flatten again with the element as the passed in argument
        flatten(arr2);
      }
    });
  }
  // return storage array
  return oneArray;
}

// returns => [ 1, 2, 3, 4 ]
steamrollArray([1, [2], [3, [[4]]]]);
