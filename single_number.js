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
    // empty object for storage
    let map = {};

    // iterate over the passed in nums array
    nums.forEach( num => {
        // check each element if it exists in the map object
        if( map.hasOwnProperty(num) ) {
            // if yes, then delete key from the object
            delete map[num];
        } else {
            // set the key to the iterated element
            map[num] = true;
        }
    });

    // return the first element returned by object.keys of the map object
    return Number(Object.keys(map)[0]);
};

//returns 4
singleNumber([4,1,2,1,2]);
