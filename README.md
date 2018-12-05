JavaScript: Higher-Order Functions, Functional Programming, ES6, and more...
===================
> Learning about es6 and other javascript topics. The following notes are a mix of helpful youtube tutorials, documentation, articles, and posts. Which will be listed in the *Links* section!

Functional Programming
-------------
>**JavaScript** works well with **functional programming** because it *accepts* **Higher-Order Functions**.
>
>**What is Functional Programming?**
>*Simply* **Functional Programming** is an approach where you can *pass* **functions** as **parameters** to other **functions** and also *return* them as *values*.
>
>With a **Functional Programming** approach we think of code in terms of **functions**.
>
>**First-Class Functions**
>In **JavaScript** *functions* are treated as **first-class citizens**.
>This is because in **JavaScript** (*or any other functional programming languages*) functions are *objects*.
>
>In **JavaScript** functions are a *special type* of object, they are ```Function``` objects.
>
>*example*:
>```
>function greeting() {
>    console.log('Hello World');
>}
>
>greeting();
>// prints 'Hello World'
>
>// add a property
>greeting.lang = 'English';
>
>console.log(greeting.lang);
>// prints 'English'
>```
>
>In the *example* above we see that we can add the property ```lang``` to the function ```greeting()```, just like we do with a normal *JavaScript* ```object```.
>*NOTE*: This is considered **bad practice**, properties should be added to a normal object.
>
>In **JavaScript**, everything you can do with other types like ```object```, ```string```, or ```number```, you can do with ```functions```.
>
>You can *pass* them as **parameters** to other functions (```callbacks```), *assign* them to ```variables``` and *pass* them around. This is why *functions* in **JavaScript** are known as **First-Class Functions**.
>
>**Assigning Functions to Variables**
>It is possible to *assign* **functions** to *variables* in *JavaScript*.
>
>*example*:
>```
>const square = function(x) {
>    return x * x;
>}
>
>// prints 25
>square(5);
>
>const foo = square;
>
>// prints 36
>foo(6);
>
>```


JavaScript Higher Order Functions & Arrays
-------------
>  **Higher-order Functions**
>  **Functions** that operate on other functions, either by taking them as **arguments** or by **returning** them, are called **higher-order functions**.
>
> So, *simply* put, a **Higher-Order function** is a **function** that receives a **function** as an **argument** or **returns** the **function** as **output**.
>
>  Higher-order functions allow us to *abstract over **actions**, not just **values**.
>  1. functions that **create** new functions.
>  ```
>  function greaterThan(n) {
>      return functions(m) { return m > n; };
>  }
>  
>  var greaterThan10 = greaterThan(10);
>  
>  console.log(greaterThan10(11));
>  
>  // => true
>  ```
>  
>  In the example we see that when we set ```var greaterThan10 = greaterThan(10);``` that ```greaterThan10``` is actually a function because ```greaterThan(n)``` *returns* a function. This is *why* we are able to *pass* the *argument* ```11``` to it (```greaterThan10(11)```).
>  That is an example of ```creating``` a function by returning a ```function```.
>  
>  2. functions that **change** other functions.
>  ```
> function noisy(f) {
>     return functions(arg) {
>         console.log("calling with", arg);
>         var val = f(arg);
>         console.log("called with", arg, "- got", val);
>         return val;
>     };
> }
>
> noisy(Boolean)(0);
> // => calling with 0
> // => called with 0 - got false
>  ```
>
>In this example the ```noisy(f)``` function will take ```function``` as an *argument*, and later that ```function``` is *executed* with the returned function's argument (```f(arg)```).
>  
>  3. functions that provide new types of control flow.
> ```
> function unless(test, then) {
>     if (!test) {
>         then();
>     }
> }
>
> function repeat(times, body) {
>    for (var i = 0; i < times; i++) body(i);
> }
>
> repeat(3, function(n) {
>     unless(n % 2, function() {
>         console.log(n, "is even");
>     });
> });
> // => 0 is even
> // => 2 is even
> ```
>
> I this example we can see that we created 2 control flow (```repeat()``` which was a loop and ```unless()``` which was a **conditional** execution).
>
>**apply()**
>The ```apply()``` calls a function with an array as arguments.
>
>In the ```noisy(f)``` function *example*, it had a *gotcha* which was the returned function had an parameter of ```arg```, so it would only take a single and would be a problem if we needed to pass multiple arguments to the *inner-function*.
>
>With ```apply()``` you can pass an ```array``` to the function that contains all the **arguments** for that function.
>```
>function noisy(f) {
>    return function(arg) {
>        console.log("calling with", arg);
>        var val = f(arg);
>        console.log("called with", arg, "- got", val);
>        return val;
>    };
>}
>
>// var val = f.apply(null, arguments);
>```
>
>
>  
>**forEach**
>The ```forEach()``` method executes a provided function (*argument*) once for each array element.
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
>**Array.prototype.filter**
>
>The ```filter()``` method creates (*returns*) a **new array** with all elements that pass the test implemented by the provided function (*callback*).
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
> - the **value** of the element
> - the **index** of the element
> - the **Array object** being traversed
>
>```filter()``` does not mutate the array on which it is called.
>

>
>**Array.prototype.map**
>
>The ```map()``` method creates (*returns*) a **new array** with the results of calling a provided function on every element in the calling array. In other words ```map()``` is used to **modify** each *element* in the ```array```.
>The ```map()``` method will take every **returned** value from the **callback** function and creates a **new array** using those values.
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
> - the **value** of the element
> - the **index** of the element
> - the **Array object** being traversed
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
>**Array.prototype.reduce**
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
>
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

>**bind()**
>The ```bind()``` method, which **all functions have**, *creates* a new function that will **call the original function** but with some of the arguments already **fixed**.
>
>*example*:
>```
>var module = {
>    x: 42,
>    getX: function() {
>        return this.x;
>    }
>}
>
>var unboundGetX = module.getX;
>console.log(unboundGetX()); // The function gets invoked at the global scope
>// expected output: undefined
>
>var boundGetX = unboundGetX.bind(module);
>console.log(boundGetX());
>// expected output: 42
>```
>
>[Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
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

Abstraction
-------------
> Abstractions **hide details** and give us the ability to talk about problems at a higher (*or more abstract*) level.
>
> In the following *example* we see **2** *snippets** of code that produce the same result:
> ```
> //1
> var total = 0, count = 1;
> while (count <= 10) {
>    total += count;
>    count += 1;
> }
> console.log(total);
> ```
> In this snippet we set **2** ```variables``` and make use of a ```for-loop``` to ```increment``` the ```total``` *variable*.
>
> In the next **example** we will make use of the ```sum``` method and ```range``` method to achieve the same outcome:
>
> ```
> console.log(sum(range(1, 10)));
> ```
>

JSON
-------------
> 1. **JSON** stands for, **JavaScript Object Notation** and is used as a **data storage** and **communication** format on the Web.
> 2. **JSON** has the following *Limitations*:
> - All **property names** have to be surrounded by **double quotes**.
> - Only **simple data expressions** are allowed, no function calls, variables, or anything that involves actual computation.
> - **No Comments** are allowed in **JSON**.
>
> *example JSON*:
>```
>[
>    {
>        "name": "Emma de Milliano",
>        "sex": "f",
>        "father": "Petrus de Milliano",
>        "mother": "Sophia van Damme"
>    },
>    {
>        "name": "Carlous Haverkeke",
>        "sex": "m",
>        "father": "Carel Haverbeke",
>        "mother": "Maria van Brussel"
>    }
>]
>```
>
> *JavaScript* provides to **functions** to work with **JSON**:
> 1. ```JSON.stringify()```: takes a *JavaScript* value and returns a **JSON-encoded string**.
> 2. ```JSON.parse()```: takes a **JSON-encoded string** and converts it to the value it encodes.
>
> *example*:
> ```
> var string = JSON.stringify({ name: "X", born: 1980 });
> console.log(string);
> // => {"name": "X", "born": 1980}
> console.log(JSON.parse(string).born);
> // => 1980
> ```
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
> - [Eloquent JavaScript Tutorial 5 High-order Functions](https://www.youtube.com/watch?v=nOfrQE4CJso)
> - [Understanding Higher-Order Functions in JavaScript](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)
> - [When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)
