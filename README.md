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
>```forEach()``` executes the ```callback``` function once for each array element; unlike ```map()``` or ```reduce()``` it always returns the value ```undefined``` and is not chainable. The typical use case is to execute side effects at the end of a chain.
>```forEach()``` does not mutate the array on which it is called (*although ```callback```, if invoked, may do so*).
>*NOTE:*
>There is no way to stop or break a ```forEach()``` loop other than by throwing an exception. If you need such behavior, the ```forEach()``` method is the wrong tool. Use a plain loop or ```for...of``` instead.
>
> For more information and example: [MDN docs on forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
>

Helpful Links
-------------
>
> -  [JavaScript Higher Order Functions & Arrays](https://www.youtube.com/watch?v=rRgD1yVwIvE)
>  *YouTube tutorial*
>  - [MDN docs on forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
> 
