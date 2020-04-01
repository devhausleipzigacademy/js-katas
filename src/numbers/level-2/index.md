Imagine a list of items, for example images in a gallery.
Each item has been given an index. The first one has index 0, the second one index 1 and so forth.

Create a function that for a given number of items in a list and a currently selected index returns the next logical selection.

However when the end of the list is reached, make sure to jump back to the beggining and return the index of the first element, i.e. 0.

**Examples**

```js
nextItemIndex(0, 5); // --> 1
nextItemIndex(3, 5); // --> 4
nextItemIndex(1, 2); // --> 0
nextItemIndex(99, 100); // --> 0
```
