Padding is a technique used when strings or numbers of various sizes need to be of a single, equal length or in order to adjust alignment. The padding can be before, after, or both before and after the important part of the string or number.

```js
const paddedString1 = "00000000importantstuff";
const paddedString2 = "importantstuff00000000";
const paddedString3 = "00000000importantstuff00000000";
```

Complete the function 'zeroPadding'. For simplicity, assume the zero padding should always go in front. The function should take two arguments, the first a string and the second a number indicating the number of zeros to front pad the string with.

One option to solve this problem would be to use a 'while' loop, the assignment operator, and the '+' operator (which when used with strings is syntactic sugar for the string method 'concat') to add the padding zero by zero.

Another option would be to use a non-loop approach. There is a string method called 'repeat' that takes a number as an argument and returns a that many copies of the string it was called on concatenated together into a single, new string. ['Repeat' Reference](https://www.w3schools.com/jsref/jsref_repeat.asp)

```js
let string = 'repeatMe';
console.log( string.repeat(4) ); // -> 'repeatMerepeatMerepeatMerepeatMe'
```

Using it and the '+' operator, you'd be able to return the correct answer using only a single statement. Use the 'repeat' method to complete the function.

### Examples

```js
zeroPadding('padMeBabyOhhYea', 5); // ->  '00000padMeBabyOhhYea'
zeroPadding('chunkyboi', 0); // ->  'chunkyboi'
```
