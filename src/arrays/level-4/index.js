const meta = {
  title: "Reset Item",
  codeFiles: ["resetItem.js"],
};

test(
  `resetItem(["a", "b", "c"], 1, "Surprise!")`,
  () => resetItem(["a", "b", "c"], 1, "Surprise!"),
  assertEqual(["a", "Surprise!", "c"])
);

test(
  `const array = ["a", "b", "c"];
resetItem(array, 1, "Surprise!");
array`,
  () => {
    const array = ["a", "b", "c"];
    resetItem(array, 1, "Surprise!");
    return array;
  },
  assertEqual(["a", "Surprise!", "c"])
);
