In this exercise you'll create a mapping of color names to their hex representations
The function should at least be able to give back the hex codes for red, blue, green and yellow.
If the color name is not recognized return 0x000000, i.e. the color black.

```js
getHexCode("red"); // --> 0xff0000
getHexCode("blue"); // --> 0x0000ff
getHexCode("green"); // --> 0x00ff00
getHexCode("yellow"); // --> 0xffff00
getHexCode("asdf"); // --> 0x000000
```
