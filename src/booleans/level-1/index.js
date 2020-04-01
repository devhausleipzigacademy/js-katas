const meta = {
  title: "XOR",
  codeFiles: ["xor.js"]
};

test("xor(true, false)", () => xor(true, false), assertEqual(true));
test("xor(false, true)", () => xor(false, true), assertEqual(true));
test("xor(true, true)", () => xor(true, true), assertEqual(false));
test("xor(false, false)", () => xor(false, false), assertEqual(false));
