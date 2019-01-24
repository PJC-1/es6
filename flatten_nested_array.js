var arr = [1,2,[3,4,[5,[6]],7],8,9];

function flatten(arr) {

    return arr.reduce(function(acc, curr){

        var items = Array.isArray(curr) ? flatten(curr) : [curr];

        return acc.concat(items);

    }, []);
}

// returns [1,2,3,4,5,6,7,8,9]
console.log(flatten(arr));
