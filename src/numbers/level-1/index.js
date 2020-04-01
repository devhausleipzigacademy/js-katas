test("> abs(3)", () => abs(3), assertEqual(3));
test("> abs(-3)", () => abs(-3), assertEqual(3));
test("> abs(0)", () => abs(0), assertEqual(0));

const meta = {
  title: "Absolute Value",
  codeFiles: ["absolute.js"]
};
