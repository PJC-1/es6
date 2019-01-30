// An array is monotonic if it is either monotone increasing or monotone decreasing.
//
// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
//
// Return true if and only if the given array A is monotonic.
//
//
//
// Example 1:
//
// Input: [1,2,2,3]
// Output: true
// Example 2:
//
// Input: [6,5,4,4]
// Output: true
// Example 3:
//
// Input: [1,3,2]
// Output: false
// Example 4:
//
// Input: [1,2,4,5]
// Output: true
// Example 5:
//
// Input: [1,1,1]
// Output: true

var isMonotonic = function(A) {
  let B = A.slice(0);

  A.sort((a,b) => a-b);
  if(B.toString() === A.toString()) {
      return true;
  }
  A.sort((a,b) => b-a);
  if(B.toString() === A.toString()) {
      return true;
  }
  return false;
};

isMonotonic([6,5,4,4]);
