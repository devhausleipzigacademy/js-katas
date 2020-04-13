Arrays have a method called 'push' that appends the arguments passed to it to the array on which the method is called.

The 'push' method will push its arguments to the array starting with the first argument, then the second, then the third, and so forth. This means that the apparent ordering of the arguments is preserved as they are pushed to the array.

Complete the 'pushToArray' function. It should take as its first argument an array and then any number of further arguments, each of which is an item to be appended to the array.

Complete the 'pushToArrayForEach' function. This function would allow you to pass a single array of items to be appended, rather than each item as an individual argument. Yes, you could just use '.concat()' and get the same results. But that wouldn't be any fun.

### Examples

```js
pushToArray(['I','B','S'], 'is', 'no', 'fun'); // -> ['I','B','S', 'is', 'no', 'fun'];

pushToArrayForEach(['Snow White'],['Dopey', 'Doc', 'Bashful', 'Happy', 'Grumpy', 'Sleepy', 'Sneezy']); // -> ['Snow White', 'Dopey', 'Doc', 'Bashful', 'Happy', 'Grumpy', 'Sleepy', 'Sneezy'];
```
