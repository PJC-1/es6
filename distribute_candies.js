// Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.
// Example 1:
// Input: candies = [1,1,2,2,3,3]
// Output: 3
// Explanation:
// There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
// Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
// The sister has three different kinds of candies.
// Example 2:
// Input: candies = [1,1,2,3]
// Output: 2
// Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
// The sister has two different kinds of candies, the brother has only one kind of candies.

var distributeCandies = function(candies) {
  // storage for the different candies available
  var map = {};
  // length of the passed in candies array
  var len = candies.length;
  // caching half of the length
  var half = len/2;
  // caching a counter variable
  var keyCounter = 0;

  // for loop to iterate over the candies array and build the map
  for(var i = 0; i < len; i++) {
    //add the candy as a key to the map object
    map[candies[i]] = true;
  }

  // iterate over the map object
  for(var key in map) {
    // for every key, increment the counter variable
    keyCounter++;
  }

  // make a check that returns half if the counter is greater than or equal to half the length of the candies array
  if(keyCounter >= half) {
    return half;
  } else {
    // else return the value of the counter variable
    return keyCounter;
  }

};

// returns 2
distributeCandies([1,1,2,3]);
