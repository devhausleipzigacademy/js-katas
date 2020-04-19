When you write a function, you make assumptions about the data you will be working with in the function body. Languages that have static type checking enforce the quality of arguments passed to functions via the use of expressive and, at times, confusing type systems.

The absence of static type checking in vanilla JavaScript makes it a 'dynamically typed' language. It can make development faster since developers don't have to deal with a type system for every function. However, in many circumstances it can lead to more frequent bugs in code, especially if there is not extremely clear documentation about function APIs and a development environment that lends itself to usable documentation (e.g. linking function API docs to hover tooltips in an IntelliSense-like manner). Developers are human and forget; large groups of developers forget correspondingly more.

Complete the function 'exceptionNullArg'. It should take one argument of any kind, throw an exception if it is 'null', and return the value of the argument if it is not 'null'.

You will need to use the 'throw' keyword to throw an exception. In general, you'll always want to throw an Error object so you'll always place 'Error()' after and pass in a string with the desired error message. It looks like this:

Exceptions bypass the normal execution of functions. It won't matter how many functions have called other functions to get to where the exception happens in the code, the JS interpreter will not simply return the error back to the calling function, then again to the next calling function, all the way back up to the global scope. Instead, it will completely exit directly back to the global scope, throwing away all state contained in the called functions and not allowing any of their remaining code to execute, and then log the uncaught error.

```js
  throw Error('A description of the error.');
```

### Examples
```js
exceptionNullArg('stringCheese'); // -> 'stringCheese'
exceptionNullArg(69); // -> 69
exceptionNullArg( {meAmIs: 'anObject'} ); // -> {meAmIs: 'anObject'}
exceptionNullArg(null); // -> Error: 'Value is null'
```
