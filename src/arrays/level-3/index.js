const meta = {
  title: "Save Array Access",
  codeFiles: ["saferGetItem.js"],
};

test(
  `saferGetItem(["a", "b", "c"], 0)`,
  () => saferGetItem(["a", "b", "c"], 0),
  assertEqual("a")
);

test(
  `saferGetItem(["a", "b", "c"], 2)`,
  () => saferGetItem(["a", "b", "c"], 2),
  assertEqual("c")
);

test(`saferGetItem([], 0)`, () => saferGetItem([], 0), assertThrows());

test(
  `saferGetItem([1, 2, 3], 99)`,
  () => saferGetItem([1, 2, 3], 99),
  assertThrows()
);
test(
  `saferGetItem([1, 2, 3], -1)`,
  () => saferGetItem([1, 2, 3], -1),
  assertThrows()
);
