Complete the function 'isMethod'. It should take two arguments, the first an Object and the second a string containing the name of a method to check for. It should return a Boolean.

It should first use the function you completed during the previous level, 'objectHasProperty', to ensure that there is a property with binding specified by the second argument. It should then check what the type of the property is using the 'typeof' operator and ensure that the type is 'function'.

'typeof' is an operator that returns a string with the type of a JavaScript entity. For example:

```js
console.log(typeof "I'm a string"); // -> "string"
console.log(typeof 42); // -> "number"
console.log(typeof false); // -> "boolean"
```

Undefined   "undefined"
Null    "object"
Boolean   "boolean"
Number    "number"
String    "string"
Function object   "function"
Any other object    "object"

### Examples

```js
isMethod(anObj, 'realMethod'); // -> True
isMethod(anObj, 'fakeMethod'); // -> False
```
