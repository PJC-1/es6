// A self-dividing number is a number that is divisible by every digit it contains.
//
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
//
// Also, a self-dividing number is not allowed to contain the digit zero.
//
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
//
// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

var selfDividingNumbers = function(left, right) {
    // storage array
    let result = [];
    // iterate over the numbers based on passed in values
    for(let i = left; i <= right; i++) {
      // cache variable of i converted to a string
      let str = i.toString();
      // cache a variable of the converted string into an array of each character
      let splt = str.split('');

      // executes the callback function once for each element in the array.
      // will immeditaely return false on the first falsy value returned by the callback
      // if all items in the array return true from the callback, then every will return true
      // callback check if i (number) is divisable by the num (each integer that makes up 'i')
      if(splt.every(num => i % parseInt(num) == 0)) {
        // if true, then the 'i' is a self-dividing number, push into the result array
        result.push(i);
      }
    }
    // return result
    return result;
};

// returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
selfDividingNumbers(1, 22);
