Object.prototype.hasOwnProperty() is a built-in method that checks the Object it is called on for a given property. However, it will not match inherited properties (i.e. from the Object's prototype), only properties specific to the namespace/scope of the Object itself.

Implement your own function that produces similar behavior (without using the method above!). Complete the function 'objectHasProperty'. It should take two arguments, one for the object to check and one for the property to be checked for. It should return a Boolean.

### Examples

```js
objectHasProperty(anObj, 'realProperty'); // -> True
objectHasProperty(anObj, 'fakeProperty'); // -> False
```
