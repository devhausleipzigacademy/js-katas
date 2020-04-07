By default if you access an index in an array that doesn't exist, the `[]` operator will simply return undefined.

Implement a function that overrides this behaviour and instead throws an exception if the index is out of bounds.

You can throw an exception with this statement.

```js
throw new Error("Index out of bounds");
```

### Examples

```js
saferGetItem(["a", "b", "c"], 0); // -> "a"
saferGetItem(["a", "b", "c"], 1); // -> "b"
saferGetItem(["a", "b", "c"], 2); // -> "c"
saferGetItem(["a", "b", "c"], 3); // -> throw Exception
saferGetItem([], 0); // -> throw Exception
saferGetItem([1, 2, 3], 99); // -> throw Exception
saferGetItem([1, 2, 3], -1); // -> throw Exception
```
