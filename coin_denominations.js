// given an array of numbers and a target sum.
// using the aray numbers, return the number of possible combinations that add up to the target sum

var arr = [1,2,3];
var S = 4;

function denom(arr, S) {
    // array to store the different results
    var result = [];
    // object that will store the different combinations
    var comboMap = {};

    // initial loop to iterate through the passed in array
    for(var i = arr.length -1; i >= 0; i--) {
        // second loop so it will be possible iterate a second time
        for(var j = arr.length -1; j >= 0; j--) {
            // a temporary object used for storage
            var temp = {
              // the sum property will hold the sum, which will be used to compare against the S target
              sum: arr[i],
              // the array property will store the integers that add up to the sum property value
              arr: [arr[i]]
            }

            // this will loop as long as the temporary storage's sum is not greater than the S target
            // and that the temporary storage's sum plus the current iterated value is not greater than the S target
            while(temp.sum <= S && !(temp.sum + arr[j] > S)) {
              // at the current iterated element value to the temporary storage's sum
              temp.sum += arr[j];
              // also push the current iterated element value into the temporary arr array
              temp.arr.push(arr[j]);
            }

            // when the while loop is finished that means that the temporary arr is complete
            // so we sort that array so that duplicate values such as: [1, 3] and [3, 1] will be easier to find
            var sortedTemp = temp.arr.sort();

            // do a check that the comboMap storage object does not contain the sortedTemp array
            if(!comboMap.hasOwnProperty(sortedTemp)) {
                // if the combination doesn't exists in comboMap, then add it to the result array
                result.push(sortedTemp);
                // also add the sortedTemp array to the comboMap object and set it's value to 1
                comboMap[sortedTemp] = 1;
            }
        }
    }

    // the result array at this point will contain some elements that do not add up to the S target (4), but it does contain all possible combinations that make up the S target.
    // so using the filter and chaining the reduce methods will allow us to drill down to the array combinations.
    var filteredResults = result.filter( item => {
        // we use the reduce method because it will give us an accumulator, which we can use to add all the elements in the array
        var reducedItem =item.reduce((acc, curr) => acc += curr);
        // then we can check if they accumulate to the S target value
        if(reducedItem === S) {
          // if yes, then return true, which is what the filter function is expecting
          return true;
        }
    });
    // outputs [ [ 1, 3 ], [ 2, 2 ], [ 1, 1, 2 ], [ 1, 1, 1, 1 ] ]
    console.log(filteredResults);
    // returns 4
    return filteredResults.length;
}

// returns 4
denom(arr, S);
