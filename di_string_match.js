// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
//
// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:
//
// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]
//
//
// Example 1:
//
// Input: "IDID"
// Output: [0,4,1,3,2]
// Example 2:
//
// Input: "III"
// Output: [0,1,2,3]
// Example 3:
//
// Input: "DDI"
// Output: [3,2,0,1]

var diStringMatch = function(S) {
    // cache the length of the passed in string as max
    let max = S.length;
    // cache the min value of 0
    let min = 0;
    // storage array
    let result = [];

    // loop for the length of the passed in string
    for(let i = 0; i < S.length; i++) {
      // check if character is "I"
      if(S[i] == "I") {
        // if yes, then push the min value
        result.push(min);
        // increment min
        min++;
      // else (if character is "D")
      } else {
        // if yes, then push the max value
        result.push(max);
        // decrement max
        max--;
      }
    }
    // push the last value, since the value is 0 - S.length, which is S.length + 1
    result.push(min);
    // return result array
    return result;
};

diStringMatch("IDID");
//Output: [0,4,1,3,2]
