// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
//
// Example 1:
// Input: [1,4,3,2]
//
// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

var arrayPairSum = function(nums) {
  // sort the passed in array
  const sortedArr = nums.sort((a, b) => a - b);
  // create a variable to store the sum that will be returned
  let sum = 0;
  // iterate for the length of the nums array
  for(let i = 0; i < nums.length; i++) {
    // check if the index is even
    // the pattern shows that only even index elements in the array will be added together
    // from a sorted array.
    if(i % 2 == 0) {
      // if the current index being iterated is even, then add the element value to the sum variable
      sum += sortedArr[i];
    }
  }

  return sum;
};

// returns 4
arrayPairSum([1,4,3,2]);
