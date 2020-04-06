const meta = {
  title: "First Item",
  codeFiles: ["firstItem.js"],
};

test(
  `firstItem(["a", "b", "c"])`,
  () => firstItem(["a", "b", "c"]),
  assertEqual("a")
);

test(`firstItem([1, 2, 3, 4])`, () => firstItem([1, 2, 3, 4]), assertEqual(1));

test(
  `firstItem([true, false])`,
  () => firstItem([true, false]),
  assertEqual(true)
);
