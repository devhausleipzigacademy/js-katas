test("> abs(3)", () => abs(3), assertEqual(3));
test("> abs(-3)", () => abs(-3), assertEqual(3));
test("> abs(0)", () => abs(0), assertEqual(0));

const meta = {
  title: "Absolute Value",
  levelPath: "Numbers - Level 1",
  previousLink: "../../../index.html",
  nextLink: "../level-2/index.html",
  codeFiles: ["challenges/numbers/level-1/absolute.js"]
};
