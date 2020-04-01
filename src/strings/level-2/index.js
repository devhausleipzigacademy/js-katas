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
  codeFiles: ["character-comparison.js"]
};
