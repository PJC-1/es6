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



Helpful Links
-------------
>
> -  [JavaScript Higher Order Functions & Arrays](https://www.youtube.com/watch?v=rRgD1yVwIvE)
>  *YouTube tutorial*
>  - [MDN docs on forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
> - [MDN docs on map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
> - [MDN docs on filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
