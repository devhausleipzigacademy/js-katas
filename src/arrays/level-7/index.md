In JavaScript, 'Array' objects always have a 'length' property that contains the current number of elements in the respective array. It is automatically kept up to date.

Use the 'length' property to complete the 'arrayLengthEven' function; it should return a Boolean value indicating whether the provided array is of even length or not.

### Example

```js
arrayLengthEven([1,2,3,4,5]); // -> False;
arrayLengthEven(['little','piggy','went','to','town']); // -> False;
arrayLengthEven([1,2,3,4,5,6,7,8]); // -> True;
arrayLengthEven(['too','swole','to','control']); // -> True;
