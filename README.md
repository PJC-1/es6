es6!
===================
> Learning about es6 and other javascript topics. The following notes are a mix of helpful youtube tutorials, documentation, articles, and posts. Which will be listed in the *Links* section!

JavaScript Higher Order Functions & Arrays
-------------
>  
>**forEach**
>The ```forEach()``` method executes a provided function once for each array element.
>
>Example:
>
>```
>var array1 = ['a', 'b', 'c'];
>
>array1.forEach(function(element) {
>  console.log(element);
>});
>
>// expected output: "a"
>// expected output: "b"
>// expected output: "c"
>```
>
>The ```forEach()``` method can take the following parameters:
> - ```callback```
> *Function to execute for each element.*
> - ```currentValue```
> *The value of the current element being processed in the array.*
> - ```array```
> *The array that ```forEach()``` is being applied to.*
>
>**Return value**
>```undefined```
>
>**Description**
>```forEach()``` executes the provided ```callback``` once for each element present in the array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).
>
>```forEach()``` executes the ```callback``` function once for each array element; unlike ```map()``` or ```reduce()``` it always returns the value ```undefined``` and is not chainable. The typical use case is to execute side effects at the end of a chain.
>
>```forEach()``` does not mutate the array on which it is called (*although ```callback```, if invoked, may do so*).
>
>*NOTE:*
>There is no way to stop or break a ```forEach()``` loop other than by throwing an exception. If you need such behavior, the ```forEach()``` method is the wrong tool. Use a plain loop or ```for...of``` instead.
>
> For more information and examples: [MDN docs on forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
>

>
>**filter()**
>
>The ```filter()``` method creates a new array with all elements that pass the test implemented by the provided function.
>
>Example:
>
>```
>var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
>
>const result = words.filter(word => word.length > 6);
>
>console.log(result);
>// expected output: Array ["exuberant", "destruction", "present"]
>
>```
>
>```filter()``` calls a provided ```callback``` function once for each element in an array, and constructs a new array of all the values for which ```callback``` returns *a value that coerces to ```true```*. ```callback``` is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the ```callback``` test are simply skipped, and are not included in the array.
>
>```callback``` is invoked with three arguments:
> - the value of the element
> - the index of the element
> - the Array object being traversed
>
>```filter()``` does not mutate the array on which it is called.
>

>
>**map()**
>
>The ```map()``` method creates a new array with the results of calling a provided function on every element in the calling array.
>
>Example:
>```
>var array1 = [1, 4, 9, 16];
>
>// pass a function to map
>const map1 = array1.map(x => x * 2);
>
>console.log(map1);
>// expected output: Array [2, 8, 18, 32]
>```
>
>**Return value**
>*A new array with each element being the result of the callback function.*
>
>```map``` calls a provided ```callback``` function **once for each element** in an array, in order, and constructs a new array from the results. ```callback``` is invoked only for indexes of the array which have assigned values, including ```undefined```. It is not called for missing elements of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).
>
>```callback``` is invoked with three arguments:
> - the value of the element
> - the index of the element
> - the Array object being traversed
>
>```map``` does not mutate the array on which it is called (although ```callback```, if invoked, may do so).
>

>
>**sort()**
>
>The ```sort()``` method sorts the elements of an array *in place* and returns the array. The sort is not necessarily *stable*. The default sort order is according to string Unicode code points.
>
>Example:
>```
>var months = ['March', 'Jan', 'Feb', 'Dec'];
>months.sort();
>console.log(months);
>// expected output: Array ["Dec", "Feb", "Jan", "March"]
>
>var array1 = [1, 30, 4, 21];
>array1.sort();
>console.log(array1);
>// expected output: Array [1, 21, 30, 4]
>
>```
>
>**Parameters**
>```compareFunction```
>Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's *Unicode* code point value, according to the string conversion of each element.
>
>**Return value**
>The sorted array. Note that the array is sorted *in place*, and no copy is made.
>
>**Description**
>If ```compareFunction``` is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order.
>
>If ```compareFunction``` is supplied, the array elements are sorted according to the return value of the compare function. If ```a``` and ```b``` are two elements being compared, then:
> - If ```compareFunction(a, b)``` is less than ```0```, sort ```a``` to an index lower than ```b```, i.e. ```a``` comes first.
> - If ```compareFunction(a, b)``` returns ```0```, leave ```a``` and ```b``` unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, and thus not all browsers (e.g. Mozilla version dating back to at least 2003) respect this.
> - If ```compareFunction(a, b)``` is greater than ```0```, sort ```b``` to an index lower than ```a```, i.e. ```b``` comes first.
> - ```compareFunction(a, b)``` must always return the same value when given a specific pair of elements ```a``` and ```b``` as its two arguments. If inconsistent results are returned then the sort order is undefined.
>
>So, the compare function has the following form:
>```
>function compare(a, b) {
>  if (a is less than b by some ordering criterion) {
>    return -1;
>  }
>  if (a is greater than b by the ordering criterion) {
>    return 1;
>  }
>  // a must be equal to b
>  return 0;
>}
>```
>
>To compare numbers instead of strings, the compare function can simply subtract ```b``` from ```a```. The following function will sort the array ascending (if it doesn't contain ```Infinity``` and ```NaN```):
>```
>
>function compareNumbers(a, b) {
>  return a - b;
>}
>
>```
>

>
>**reduce()**
>
>The ```reduce()``` method applies a function against an accumulator and each element in the array (*from left to right*) to reduce it to a single value.
>
>Example:
>```
>const array1 = [1, 2, 3, 4];
>const reducer = (accumulator, currentValue) => accumulator + currentValue;
>
>// 1 + 2 + 3 + 4
>console.log(array1.reduce(reducer));
>// expected output: 10
>
>// 5 + 1 + 2 + 3 + 4
>console.log(array1.reduce(reducer, 5));
>// expected output: 15
>```
>
>**Return value**
>The value that results from the reduction.
>
>```reduce()``` executes the ```callback``` function once for each element present in the array, excluding holes in the array, receiving four arguments:
> - ```accumulator```
> The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or ```initialValue```, if supplied.
> - ```currentValue```
> The current element being processed in the array.
> - ```currentIndex```
> The index of the current element being processed in the array. Starts at index ```0```, if an ```initialValue``` is provided, and at index ```1``` otherwise.
> - ```array```
> (*optional*) The array ```reduce()``` was called upon.
>
> The first time the callback is called, ```accumulator``` and ```currentValue``` can be one of two values. If ```initialValue``` is provided in the call to ```reduce()```, then ```accumulator``` will be equal to ```initialValue```, and ```currentValue``` will be equal to the first value in the array.
> If no ```initialValue``` is provided, then ```accumulator``` will be equal to the first value in the array, and ```currentValue``` will be equal to the second.
>
> *Note*: If ```initialValue``` isn't provided, ```reduce()``` will execute the callback function starting at index 1, skipping the first index. If ```initialValue``` is provided, it will start at index ```0```.
>


String methods
-------------
>
>**split()**
>The ```split()``` method splits a ```String``` object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
>
>*Note*: If an empty string ```("")``` is used as the separator, the string is split between each character.
>
>**Return value**
>An ```Array``` of strings split at each point where the separator occurs in the given string.
>

>
>
>

Helpful Links
-------------
>
> -  [JavaScript Higher Order Functions & Arrays](https://www.youtube.com/watch?v=rRgD1yVwIvE)
>  *YouTube tutorial*
>  - [MDN docs on forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
> - [MDN docs on map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
> - [MDN docs on filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
> - [MDN docs on reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
> - [JavaScript Cardio Session 1](https://www.youtube.com/watch?v=M2bJBuaOeOQ)
> *YouTube tutorial*
> - [JavaScript - Learn to Chain Map, Filter, and Reduce](https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4)
