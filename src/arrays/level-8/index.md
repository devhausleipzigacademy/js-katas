The method 'Array.prototype.concat()' allows you to concatenate two arrays. The array passed to the method with be appended to the array on which the method is called. This mutates the array on which the method is called, but not the one passed into the method call.

Complete the 'concatArrays' function by making use of this built-in method.

### Examples

```js
concatArrays([1,2,3], [5,6,7]); // -> [1,2,3,5,6,7];
concatArrays(['a','b','c'], ['e','f','g']); // -> ['a','b','c','e','f','g'];
concatArrays([{a:1,b:'2'}], ['sinister']); // -> [{a:1,b:'2'},'sinister'];
```
