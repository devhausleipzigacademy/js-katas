You are given a function called logArrayWhileLoop, which logs each element of an array to the console.

Implement three new functions, which all should have the same behaviour, but use a different method to iterate through the array.

logArrayForLoop should use a regular for loop.
logArrayForOfLoop should use the newer for of loop.
logArrayForEach should use the forEach array method.

This is just an exercise to get you used to the different syntax. Here's a reference for the different constructs.

### for

```js
for (let i = 0; condition; ++i) {
  // Loop Body
}
```

### for of

```js
for (element of array) {
  // Loop Body
}
```

### forEach

```js
array.forEach((element) => {
  // `Loop` Body
});
```
