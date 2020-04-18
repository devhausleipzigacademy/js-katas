In JavaScript, Objects are a type of entity. Curly braces ( {} ) denote an Object. They take key/value pairs that can potentially be nested to an arbitrary depth.

The key must be a string; if you put a number or any other type of entity as the key, it will be automatically type cast into a string. For this reason, you can omit string markers ('', "", and \`\`) for a key (but only for a key!).

The value can be any type (including another object, allowing for nesting). Key/value pairs are separated by commas.

```js
const anObject = {
  key1: "value1",
  "key2": 'value2',
  'key3': `value3`,
  `key4`: 4,
  key5: ["my", "Array", "is", "longer", "than", "yours"],
  nestedObject: { moreNesting: { final: "entry" } }
}
```

You can add new properties to Objects that already exist by using the assignment operator '=' together with the lookup operator '[]' (which must be placed to the immediate right of an Object binding and which only takes a string as its argument).

```js
anObject['newProperty'] = 'This is the value for the new property.';
```

There is an alternative syntax for the lookup operator (syntactic sugar) called dot notation that looks like:

```js
anObject.property
```

However, unlike the bracket notation, you cannot use string markers ('', "", and \`\`). You can only use letters, $, \_, and digits (0-9) with dot notation; you cannot start with a digit.

```js
anObject.$ = "some value" // valid
anObject._myProperty = 1  // valid
anObject.property3 = `vaccines cause autism` // valid
anObject.8 = 'some value' // invalid
anObject.'key' = `opens lock` // invalid
anObject."keyLime" = "pie"  // invalid
anObject.`ki` = 'chi, prana' // invalid
```

If you want to use other characters for your property keys, you must use bracket notation.

```js
anObject['8'] = 'some value' // valid
anObject["'key'"] = 'opens lock' // valid
anObject[`"keyLime"`] = "pie"  // valid
anObject['`ki`'] = 'chi, prana' // valid
```

Complete the function 'addProperty'. It should take three arguments, one for the Object to add a property to, one for the key, and one for the value. Make sure the function console logs the message "Are you sure you want to add a property with a non-standard identifier?" whenever the key given contains a character that is not a letter, $, \_, or digits (0-9), or it starts with a digit.

### Examples
```js
addProperty(anObject, '$','some value');
addProperty(anObject, '_myProperty','1');
addProperty(anObject, 'property3','vaccines cause autism');
addProperty(anObject, '8','some value');  // -> Are you sure you want to add a property with a non-standard identifier?
addProperty(anObject, "'key'",'opens locks'); // -> Are you sure you want to add a property with a non-standard identifier?
addProperty(anObject, `"keyLime"`,"pie"); // -> Are you sure you want to add a property with a non-standard identifier?
addProperty(andObject, '`ki`', 'chi, prana'); // -> Are you sure you want to add a property with a non-standard identifier?
```
