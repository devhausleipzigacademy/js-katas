const meta = {
  title: "Array Methods",
  codeFiles: ["array-methods.js"],
};

test(
  `repeatArray(["A", "B", "C"])`,
  () => repeatArray(["A", "B", "C"]),
  assertEqual(["A", "B", "C", "D", "E", "F"])
);

test(
  `withoutFirstAndLast(["A", "B", "C", "D", "E"])`,
  () => withoutFirstAndLast(["A", "B", "C", "D", "E"]),
  assertEqual(["B", "C", "D"])
);

test(
  `addElementToBeginning(["B", "C"], "A")`,
  () => addElementToBeginning(["B", "C"], "A"),
  assertEqual(["A", "B", "C"])
);

test(
  `removeSecondItem(["A", "B", "C", "D"])`,
  () => removeSecondItem(["A", "B", "C", "D"]),
  assertEqual(["A", "C", "D"])
);
