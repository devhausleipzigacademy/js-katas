test('> capitalize("hello")', () => capitalize("hello"), assertEqual("Hello"));
test('> capitalize("HELLO")', () => capitalize("HELLO"), assertEqual("HELLO"));
test('> capitalize("")', () => capitalize(""), assertEqual(""));
test(
  '> capitalize("abcd abcd")',
  () => capitalize("abcd abcd"),
  assertEqual("Abcd abcd")
);

const meta = {
  title: "Capitalize",
  codeFiles: ["capitalize.js"]
};
