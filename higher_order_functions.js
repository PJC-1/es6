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
