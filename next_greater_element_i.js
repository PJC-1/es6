// You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
//
// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.
//
// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
// Output: [-1,3,-1]
// Explanation:
//     For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
//     For number 1 in the first array, the next greater number for it in the second array is 3.
//     For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4].
// Output: [3,-1]
// Explanation:
//     For number 2 in the first array, the next greater number for it in the second array is 3.
//     For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

var nextGreaterElement = function(nums1, nums2) {
    let arr = [];
    for(let i = 0; i < nums1.length; i++) {
        let sliceArr = nums2.slice(nums2.indexOf(nums1[i]));

        let foundGreater = false;
        let startSearching = false;

        for(let j = 0; j < sliceArr.length; j++) {
            if(nums1[i] == sliceArr[j]) {
                startSearching = true;
            }

            if(startSearching && nums1[i] < sliceArr[j]) {
                arr.push(sliceArr[j]);
                foundGreater = true;
                break;
            }
        }

        if(!foundGreater) {
            arr.push(-1);
        }

    }

    return arr;
};


// returns [-1,3,-1]
nextGreaterElement([4,1,2], [1,3,4,2]);
