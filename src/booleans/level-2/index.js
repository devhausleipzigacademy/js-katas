const meta = {
  title: "If Else",
  codeFiles: ["if-else.js"]
};

test('> getHexCode("red")', () => getHexCode("red"), assertEqual(0xff0000));
test('> getHexCode("green")', () => getHexCode("green"), assertEqual(0x00ff00));
test('> getHexCode("blue")', () => getHexCode("blue"), assertEqual(0x0000ff));
test(
  '> getHexCode("yellow")',
  () => getHexCode("yellow"),
  assertEqual(0xffff00)
);
test('> getHexCode("asdfasdf")', () => getHexCode("asdfasdf"), assertEqual(0));
