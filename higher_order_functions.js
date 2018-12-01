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


// map

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
