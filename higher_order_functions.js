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

// filter example 1

function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// output:
// filtered is [12, 130, 44]

// filter example 1
// Let's say we have an array which contains objects with name and age properties.
// We want to create an array that contains only the persons with full age (age greater than or equal to 18)

// solution without higher-order function
// const persons = [
//   { name: 'Peter', age: 16 },
//   { name: 'Mark', age: 18 },
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 14 },
//   { name: 'Tony', age: 24 }
// ];
//
// const fullAge = [];
//
// for(let i = 0; i < persons.length; i++) {
//   if(persons[i].age >= 18) {
//     fullAge.push(person[i]);
//   }
// }
//
// // outputs:
// // [ { name: 'Mark', age: 18 },
// //   { name: 'John', age: 27 },
// //   { name: 'Tony', age: 24 } ]
// console.log(fullAge);

// solution with higher-order function filter
const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24 }
];

const fullAge = persons.filter(person => person.age >= 18);
console.log(fullAge);


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

// const arr1 = [1, 2, 3];
// const arr2 = [];
//
// for(let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] * 2);
// }
//
// // prints [2, 4, 6]
// console.log(arr2);

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

// map example 3
// Let's say we have an array containing the birth year of different persons and
// we want to create an array that contains their ages.

// // solution without Higher-Order Functions
// const birthYear = [1975, 1997, 2002, 1995, 1985];
// const ages = [];
// for(let i = 0; i < birthYear.length; i++) {
//   let age = 2018 - birthYear[i];
//   ages.push(age);
// }
// //prints [43, 21, 16, 23, 33]
// console.log(ages);

// solution using map()
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(age => 2018 - age);
//prints [43, 21, 16, 23, 33]
console.log(ages);

// reduce

// reduce example 1
var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 0);

// total is 6

// reduce example 2
// Let's say we have to sum an array of numbers.

// // without higher-order function
// const arr = [5, 7, 1, 8, 4];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
//
// // prints 25
// console.log(sum);

// with higher-order function reduce

const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

// prints 25
console.log(sum);


// we can also provide an initial value to this function
const arr2 = [5, 7, 1, 8, 4];
const sum2 = arr2.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 10);

// prints 35
console.log(sum2);

// bind

function list() {
  return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3); // => [1, 2, 3]
var leadingThirtysevenList = list.bind(null, 37);
var list2 = leadingThirtysevenList(); // => [37];
var list3 = leadingThirtysevenList(1, 2, 3); // => [37, 1, 2, 3]
