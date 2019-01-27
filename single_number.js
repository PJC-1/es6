// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
// Example 1:
//
// Input: [2,2,1]
// Output: 1
// Example 2:
//
// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        if(!map.hasOwnProperty(nums[i])) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1;
        }
    };

    for(let key in map) {
        if(map[key] === 1) {
            return key;
        }
    }
};

//returns 4
singleNumber([4,1,2,1,2]);
