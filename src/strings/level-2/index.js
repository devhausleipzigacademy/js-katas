test(
  "> comp('Apple', 'Pears')",
  () => comp("Apple", "Pears"),
  assertEqual(true)
);

test("> comp('ABCD', 'ABC')", () => comp("ABCD", "ABC"), assertEqual(false));

test("> comp('', '')", () => comp("", ""), assertEqual(true));

test("> comp('123', '1111')", () => comp("123", "1111"), assertEqual(false));

const meta = {
  title: "Character Comparison",
  levelPath: "String - Level 2",
  previousLink: "../level-1/index.html",
  nextLink: "../level-3/index.html",
  codeFiles: ["challenges/strings/level-2/character-comparison.js"]
};
