const meta = {
  title: "Last Item",
  codeFiles: ["lastItem.js"],
};

test(
  `lastItem(["a", "b", "c"])`,
  () => lastItem(["a", "b", "c"]),
  assertEqual("c")
);

test(`lastItem([1, 2, 3, 4])`, () => lastItem([1, 2, 3, 4]), assertEqual(4));

test(
  `lastItem([true, false])`,
  () => lastItem([true, false]),
  assertEqual(false)
);
