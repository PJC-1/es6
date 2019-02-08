// The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.
//
// Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.
//
// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

var findErrorNums = function(nums) {
  let result = [0, 1];

  nums.sort((a,b) => {return a - b});

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === nums[i - 1]) {
      result[0] = nums[i - 1];
    } else if(nums[i] > nums[i-1] + 1) {
      result[1] = nums[i -1] + 1;
    }
  }

  if(nums[nums.length - 1] !== nums.length) {
    result[1] = nums.length;
  }

  return result;
};

// returns [2,3]
findErrorNums([1,2,2,4]);
