Functions can be made to accept an unknown number of arguments (their arity is variadic). In JavaScript, this is accomplished using 'rest parameter syntax'.

The last parameter in a function declaration can be prefixed with an ellipsis (three dots '...'). The name declared for that last rest parameter will be bound to all additional arguments passed when the function is called; those additional arguments are exposed in the form of an array.

```js
function variadicFunc(firstArg, secondArg, ...args) {
  so(firstArg, secondArg)
  return args;
};

const output = variadicFunc('anArgument', 'anotherArgument', 'moreArguments', 'arguingIsFun', 'earthIsFlat');

console.log(output); // --> ['moreArguments', 'arguingIsFun', 'earthIsFlat']
```

This has limited use in most generic programming situations, but is essential for aspects of the JavaScript interpreter to work correctly and core to an advanced functional style of programming.

Complete the function 'numArgs'. It should take an unknown number of arguments and return an integer number indicating the number of arguments that were passed to it.

### Examples

```js
numArgs(); // --> 0
numArgs(1, 2, 3, [4, 5, 6, 7]); // --> 4
numArgs({ z:{ x: 'y' } }, ['a','b','c'], 3, 4, 5, 6); // --> 6
```
