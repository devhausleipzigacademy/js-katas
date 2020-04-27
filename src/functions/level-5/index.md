In many situations, you may want to return an object or an array from a function. Let's say the function is performing a specialized processing task. It performs its task and returns an object. However, it was just one sub-routine called inside another more general function responsible for the overall processing task.

```js
function subRoutine(data) {
  // does some stuff
}

function mainRoutine(data) {
  // does some stuff
  const intermediate = subRoutine(data);
  // does other stuff
  return results;
}
```

Let's say you want to merge the partial results from the subroutine with partial results from earlier. You want to make a new object combining all the properties from the object the subroutine returned and the properties from partial results from earlier.

Normally, you would have to either declare a new function by hand and write all the properties out or you would have to write some loops (or alternatively a nested loop) to iterate through the properties of every object you want to merge and insert them into a new object.

```js
function mainRoutine(data) {
  // does some stuff
  const someIntermediate = subRoutine(data);
  const results = {
    property1: someIntermediate.property1,
    property2: someIntermediate.property2
    // so on, so forth...
    propertyA: otherIntermediate.propertyA
    propertyB: otherIntermediate.propertyB
    // so on, so forth...
  }
  return results;
}
```
or
```js
function mainRoutine(data) {
  // does some stuff
  const someIntermediate = subRoutine(data);
  const results = {};
  for (property of someIntermediate) {
    results.property = someIntermediate.property
  };
  for (property of otherIntermediate) {
    results.property = otherIntermediate.property
  };
  return results;
}
```
or
```js
function mainRoutine(data) {
  // does some stuff
  const someIntermediate = subRoutine(data);
  const intermediateArray = [someIntermediate, otherIntermediate];
  const results = {};
  for (intermediate of intermediateArray) {
    for (property of intermediate) {
      results.property = intermediate.property
    }
  };
  return results;
}
```

Thankfully, modern JavaScript has introduce some syntax that makes doing this much simpler. Instead of writing loops yourself, JavaScript will "destructure" an object or array; this means that it will iterate through the object or array by itself and output the keys and values of the object or array one at a time as independent bindings.

Destructuring is accomplished by putting an ellipsis (three dots '...') before an object or array.

```js
console.log(oldObject.property1); // --> "value1"
const newObj = {
  ...oldObject
};
console.log(newObject.property1); // --> "value1"
```

Note how destructuring not only outputs the values, it binds them to their key values in the new object as well.

Thus, going back to our original example, we can simply do this:

```js
function mainRoutine(data) {
  // does some stuff
  const someIntermediate = subRoutine(data);
  const results = {
    ...someIntermediate,
    ...otherIntermediate
  };
  return results;
}
```

Complete the function 'apply' and 'call'. They both accept a function that you want to call as the first argument.

'call' accepts an array as its second argument. It should use the values in that array as the arguments of the function it calls (specified by the first argument of 'call').

'apply', instead of a single array, accepts an unknown number of further arguments that it then passes along as the arguments of the function it calls (specified by the first argument of 'apply').

Hint: 'apply' will require use of rest parameter syntax. Both 'call' and 'apply' will require use of destructuring when they call the function specified by their first argument.


### Examples
```js
call(someFunc, [arg1, arg2, arg3]); // --> someFunc(arg1, arg2, arg3);
apply(someFunc, arg1, arg2, arg3); // --> someFunc(arg1, arg2, arg3);
```
