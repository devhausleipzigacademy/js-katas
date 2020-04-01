test("> nextItemIndex(0, 5)", () => nextItemIndex(0, 5), assertEqual(1));
test("> nextItemIndex(4, 5)", () => nextItemIndex(3, 5), assertEqual(4));
test("> nextItemIndex(1, 2)", () => nextItemIndex(1, 2), assertEqual(0));

const meta = {
  title: "Modulo",
  codeFiles: ["modulo.js"]
};
