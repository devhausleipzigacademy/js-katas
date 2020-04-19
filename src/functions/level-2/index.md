A callback is a term used to refer to a function passed as an argument to another function. It is referred to as a 'callback' because in event-driven programming and asynchronous operations, it is what is "called back" to perform an action when some event is triggered. That event can be a button click or completion of an asynchronous operation like fetching a website.

Complete the function 'callbackTimeout'. It should take one argument, the amount of time to wait, and should result in two messages being logged to the console:
1) "I'll call you back in 5 seconds."
2) "Hello?"

The second message should be logged to the console after the specified wait time has passed. You'll need to use the browser window function 'setTimeout' to accomplish this. 'setTimeout' takes two arguments, a callback function and a number representing the number of microseconds (thousandths of a second) to wait before calling the callback.

If you declare a function without a name, it is called an anonymous (or lambda) function. It is a new function Object that can be run but it has no binding and so cannot be reused elsewhere in your code. It is a "one-time use" function.

```js
// the extra parenthesis surrounding the function are there because we're defining a function literal, but only statements can be executed

(
  function() {
    console.log("I'm doing stuff!")
  };
)(); // --> "I'm doing stuff!"

// the extra pair of parenthesis at the end are the 'call' operator, making the entire thing a proper executable statement; we're calling the function literal we just defined (with no arguments), just like how we call functions defined in the normal way
```

You can use the assignment operator '=' to bind an anonymous function, but then it is equivalent to just using the 'function' keyword normally used to declare a function.

```js
const funcName = function() { /*do nothing*/ }

function funcName() { /*do nothing*/ }
```

Either pass a callback to 'setTimeout' by passing a binding that will resolve to a function literal (like 'funcName' above) or by defining an anonymous function directly as the argument.
