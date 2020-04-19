When declaring a function, you can add default values to parameters. That is, if one of the arguments passed to a function at run-time is 'undefined' the default value for that parameter will be used instead.

```js
function meHaveDefaults(str1 = "silly", str2 "string", str3 = "strange", str4 = "pasta") {
    return `${str1} ${str2} ${str3} ${str4}`;
};

console.log( meHaveDefaults() ); // --> "silly string strange pasta"
console.log( meHaveDefaults('yummy',,'floppy', undefined) ); // --> "yummy string floppy pasta"
```

This is most useful when generating some sort of configurable structure without requiring that all configuration options be defined every time. It is not a suitable replacement for checking for malformed arguments since no notice is given (no errors thrown, for instance) and silent failure is generally a bad thing in software.

Complete the function 'map'. It should take three arguments, an input array, a starting index, and a callback. It should create a new array and, starting from the specified starting index, loop through the input array element by element, and map them into the corresponding index in the new array after applying some sort of operation.

The second and third parameters should have defaults. The second parameter should default to 0. The third parameter should default to the identity mapping (i.e. it should map an element without change to the corresponding location in the new array).

```js
map([1,2,3,4,5,6,7,8], 2, undefined); // --> [3,4,5,6,7,8]
map([1,2,3,4,5,6,7,8], undefined, powerOfTwo(array, currentIndex, value); // --> [2,4,8,16,32,64,128,256] 
```
