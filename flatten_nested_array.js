var arr = [1,2,[3,4,[5,[6]],7],8,9];

function flatten(arr) {
    // return the reduce higher order function on the passed in array
    return arr.reduce(function(acc, curr){
        // set items to either call the flatten function with the current element in the passed in array
        // or if the current element is not an array then set the crrent element in an array
        var items = Array.isArray(curr) ? flatten(curr) : [curr];

        // return the reduce function's accumulator parameter thats been concatenated with the items variable
        return acc.concat(items);

    // set the initial value of the accumulator parameter to an empty array
    }, []);
}

// returns [1,2,3,4,5,6,7,8,9]
console.log(flatten(arr));
