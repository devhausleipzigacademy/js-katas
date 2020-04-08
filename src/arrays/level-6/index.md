This challenge is about getting used to first researching and then using array methods.

You can find a complete reference of all array methods at
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

We'll be using the following methods, so make sure to look them up to understand how they work.

- concat
- slice
- splice

There are four different functions to implement. The examples are the quickest way to show how they should behave.
Since this is an exercise you can expect that the functions will always be called with arrays containing enough elements so the operation can be performed.
It's ok to mutate the incoming array, but don't forget to also return the updated array.

```js
repeatArray(["A", "B", "C"]) -> ["A", "B", "C", "A", "B", "C"]

withoutFirstAndLast(["A", "B", "C", "D", "E"]) -> ["B", "C", "D"]

addElementToBeginning(["B", "C"], "A") -> ["A", "B", "C"]

removeSecondItem(["A", "B", "C", "D"]) -> ["A", "C", "D"]
```

### Advanced

If you want to write your code in a way that the incoming array will stay untouched, here's a little trick to create a perfect independent copy of an array. Calling concat without anything to be concatenated you get a brand new copy of the original array.

```js
const arrayClone = array.concat();
```
