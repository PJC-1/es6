// SYMMETRIC DIFFERENCE
// Create a function that takes two or more arrays and returns an array of the "symmetric difference" (@ or @@)
// of the provided arrays.
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}),
// the mathematical term "symmetric difference" of two sets is the set of elements
// which are in either of the two sets, but not in both (A @ B = C = {1, 4}).
// For every additional symmetric difference you take (say on a set D = {2, 3}),
// you should get the set with elements which are in either of the two the sets but not both
// (C @ D = {1, 4} @ {2, 3} = {1, 2, 3, 4})

function sym(args) {
  // variable to store result
  var result = [];
  // variable to store the mapping of the arguments
  var argMap = {};

  // loop through the passed in arguments
  for(var arg in arguments) {
    // loop through each argument
    for(var elem of arguments[arg]) {
      // check if the argMap object contains the element being iterated
      if(!argMap.hasOwnProperty(elem)) {
        // if not, then set the key and value to 1
        argMap[elem] = 1;
      } else {
        // else increment the key's value by 1
        argMap[elem] += 1;
      }
    }
  }

  // loop through the argMap object
  for(var item in argMap) {
    // check if the iterated key's value is equal to 1
    if(argMap[item] === 1) {
      // if yes, push the key into the results array
      result.push(item);
    }
  }

  // return the result array
  return result;
}
// return [3, 4, 5]
sym([1, 2, 3], [5, 2, 1, 4]);
