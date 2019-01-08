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
  // slice all arguments into a single array
  var argsArray = [].slice.call(arguments);
  console.log("argsArray: ", argsArray);
  // callback function to iterate through multiple arrays for reduce
  // arr1 is the accumlator argument
  // arr2 is the currentValue argument
  function symDiff(arr1, arr2) {
    console.log("arr1: ", arr1);
    console.log("arr2: ", arr2);
    // create array to store unique values
    var uniqueVals = [];
    for(var i = 0; i < arr1.length; i++) {
      if(arr2.indexOf(arr1[i]) < 0 && uniqueVals.indexOf(arr1[i]) < 0) {
        uniqueVals.push(arr1[i]);
      }
    }

    arr2.forEach(function(item) {
      if(arr1.indexOf(item) < 0 && uniqueVals.indexOf(item) < 0) {
        uniqueVals.push(item);
      }
    });

    return uniqueVals;
  }

  return argsArray.reduce(symDiff);
}
// return [3, 4, 5]
sym([1, 2, 3], [5, 2, 1, 4]);

// return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
