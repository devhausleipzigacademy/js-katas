Declaring an Object binding with 'const' will prevent the binding from being reassigned later in the script. However, unlike what you may intuitively expect, the immutability of the binding is not distributive; that is, it does not enforce immutability on the values inside the object.

Thus, you have behavior like this:

```js
const binding = { key: 'value1'}
binding.key = 'value2';
console.log(binding[key]); // --> 'value2'
```

However, the keys are by default immutable. Keys in an object can only be removed by using the 'delete' operator (or by directly using the corresponding Object method used in the background by the interpreter).

```js
const anObj = { key: 'value' }
delete anObj.key;
const grabValue = anObj.key;
console.log(grabValue); // --> undefined
```

This is only true, however, for keys at the top level of the Object; nested key/value pairs are treated as values of their parent key and, thus, can be reassigned arbitrarily.

You might assume that even if the values in an Object are mutable, it's not so big a deal. You can just make a copy of the Object and use the equality operator to check them and see if the values have changed, right?

```js
const anObj = { key: 'value1' };
const objCopy = anObj;

anObj.key = 'value2';

anObj == objCopy; // --> True
```

...uhh, what? Why does the equality operator return 'true' if we changed one of the Objects? The reason is because *both bindings point to the same Object*! When you assign an existing Object to a new binding, it does not create a new copy of the Object; instead, it simply takes a reference (a "pointer") to the existing Object in memory and stores it in the new binding.

So above, when we changed the value of 'anObj[key]', we were actually changing the value of 'objCopy[key]' too. Because 'anObj' and 'objCopy' are just two names for the same Object.

But that isn't the reason why the equality operator returned true. Let's test this by comparing two different Objects with the same key/value pair.

```js
const obj1 = { key: 'value' }
const obj2 = { key: 'value' }

obj1 == obj2; // --> false
```

...uhh, what? Why doesn't it work? The reason is because the equality operator can only compare the references stored in each binding, not the Objects themselves. So it will only return true when the references are equal (that is, both bindings refer to the same Object in memory).

There is no standard way in JavaScript to compare Objects. The best you can do is write a function (or take it from a library) that goes through both Objects entry by entry and compares keys and values one by one.

This is also true of every other entity that is a variant of an Object (an Array, a Function, etc...). Only references to them in memory can be compared, not their actual value.

```js
const func1 = function(){ return null };
const func2 = function(){ return null };
const func3 = func1;

func1 == func2; // --> false
func1 == func3; // --> true

const array1 = [1,2,3,'a','b','c'];
const array2 = [1,2,3,'a','b','c'];
const array3 = array1;

array1 == array2; // --> false
array1 == array3; // --> true
```

You are an elite hacker (known in the lingo as 'l33t HaX0R') and have stumbled upon a poorly built website. It's time to gain admin privileges! Use your knowledge of JavaScript to hack the server.

You may only assign values to the binding 'unsafeMutableCopy' where designated! Do not change any of the other code!!!

You will complete the exercise when the statement 'websiteServer(httpRequest);' returns 'true' and you have not modified any code beyond assigning a value to 'unsafeMutableCopy'.
