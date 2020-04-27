When declaring a function, you can add default values to parameters. For instance, if one of the arguments passed to a function at run-time is 'undefined', the default value for that parameter will be used instead.

```js
function meHaveDefaults(str1 = "silly", str2 "string", str3 = "strange", str4 = "pasta") {
    return `${str1} ${str2} ${str3} ${str4}`;
};

console.log( meHaveDefaults() ); // --> "silly string strange pasta"
console.log( meHaveDefaults('yummy',,'floppy', undefined) ); // --> "yummy string floppy pasta"
```

This makes more sense when you also know that defining parameters in a function declaration is roughly the same thing as declaring a variable, just in the scope of the function.

```js
function someFunc(var1, var2, var3) {
  // function body
}

// is roughly equivalent to

/*inside the function scope*/ {
  let var1;
  let var2;
  let var3;
}
```

Thus you being able to assign a default is essentially the same thing as you assigning a value to a declared variable. This assigned value can then be overwritten if a new value needs to assigned to that binding.

```js
function someFunc(var1 = "default1", var2 = "default2", var3 = "default3") {
  // function body
}

// is roughly equivalent to

/*inside the function scope*/ {
  let var1 = "default1";
  let var2 = "default2";
  let var3 = "default3";
}

// And if arguments are passed for the parameters when the function is called...

/*inside the function scope*/ {
  var1 = "arg1";
  var2 = "arg2";
  var3 = "arg3";
}
```

When the function is called a run-time, JavaScript is essentially just taking whatever values are passed to it and assigning them to the bindings declared as parameters in the function declaration.

Now, this is not 100% accurate. When you declare and assign variables in the global scope, those are stored in a globally accessible object for look-up. When you declare and assign variables in a local scope (like that of a function), those are stored in a locally accessible object for look-up. Parameter bindings and arguments are not stored in the same object as variables declared and assigned in the local scope of the function.

```js
function (argument = 'value1') {
  let variable = 'value2';
  console.log(argument); // --> 'value1'
  console.log(variable); // --> 'value2'
}

// argument and variable are not stored in the same object, even though they are both accessible from inside the function and thus are 'in its scope'
```

Instead, arguments are stored in an object called 'arguments'. This object is automatically inside of every function and will always contain an array of all the arguments passed to the function when it is called.

Parameter defaults are most useful when generating some sort of configurable structure without requiring that all configuration options be defined every time. It is not a suitable replacement for checking for malformed arguments since no notice is given (no errors thrown, for instance) and silent failure is generally a bad thing in software.

Complete the function 'map'. It should take three arguments, an input array, a starting index, and a callback. It should create a new array and, starting from the specified starting index, loop through the input array element by element, and map them into the corresponding index in the new array after applying some sort of operation.

The second and third parameters should have defaults. The second parameter should default to 0. The third parameter should default to a callback that simply maps an element without change to the output array.

```js
map([1,2,3,4,5,6,7,8], 2, undefined); // --> [3,4,5,6,7,8]
map([1,2,3,4,5,6,7,8], undefined, powerOfTwo(array, currentIndex, value); // --> [2,4,8,16,32,64,128,256]
```
