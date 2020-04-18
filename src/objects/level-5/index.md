You may or may not have noticed during the previous level that 'null' is considered by JavaScript to be of type 'object'. This is rather strange.

Undefined   "undefined"
Null    "object"
Boolean   "boolean"
Number    "number"
String    "string"
Function object   "function"
Any other object    "object"

It is a historical artifact that has resisted change. Therefore, when checking for Objects you should also always check to make sure that value is not 'null' (since a value of 'null' would pass a type check for Objects).

Complete the function 'checkIfObject'. It should take one argument, a JavaScript entity, and return a Boolean.

### Examples

```js
checkIfObject(anObj); // -> True
checkIfObject(notAnObj); // -> False
```
