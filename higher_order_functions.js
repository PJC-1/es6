// foreach

var a = ['a', 'b', 'c'];

a.forEach(function(element) {
  console.log(element);
});

// output:
// a
// b
// c


// filter

function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// output:
// filtered is [12, 130, 44]


// map example 1

var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];

var reformattedArray = kvArray.map(function(obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

// reformattedArray is now [{1: 10}, {2: 20}, {3, 30}]
// kvArray is still [ { key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 } ]

// map example 2
// Let's say we have an array of numbers and we want to create a new array which
// contains double of each value of the first array.

// solution without Higher-Order Function.

const arr1 = [1, 2, 3];
const arr2 = [];

for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

// prints [2, 4, 6]
console.log(arr2);

// solution with Higher-Order Function map()

const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
  return item * 2;
});

console.log(arr2);

// solution using map() and es6 syntax

const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);
console.log(arr2);


// reduce

var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 0);

// total is 6

// bind

function list() {
  return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3); // => [1, 2, 3]
var leadingThirtysevenList = list.bind(null, 37);
var list2 = leadingThirtysevenList(); // => [37];
var list3 = leadingThirtysevenList(1, 2, 3); // => [37, 1, 2, 3]
