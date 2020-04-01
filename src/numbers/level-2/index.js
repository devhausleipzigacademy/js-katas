test("> nextItemIndex(0, 5)", () => nextItemIndex(0, 5), assertEqual(1));
test("> nextItemIndex(4, 5)", () => nextItemIndex(3, 5), assertEqual(4));
test("> nextItemIndex(1, 2)", () => nextItemIndex(1, 2), assertEqual(0));

const meta = {
  title: "Modulo",
  levelPath: "Numbers - Level 2",
  previousLink: "../level-1/index.html",
  nextLink: "../level-3/index.html",
  codeFiles: ["challenges/numbers/level-2/modulo.js"]
};
