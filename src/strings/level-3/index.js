const generator = () => {
  const result = [];
  for (let i = 0; i < 30; ++i) {
    result.push(randomBit());
  }
  return result;
}

test("> Checking if function only returns bits: 0 or 1", generator, (values) => {
  if (values.every(n => n === 1 || n === 0)) {
    return {success: "randomBit only returns 0 or 1"}
  }
};

const meta = {
  title: "String Escape",
  levelPath: "String - Level 3",
  previousLink: "../level-2/index.html",
  nextLink: "../../../index.html",
  codeFiles: ["challenges/strings/level-3/string-escape.js"]
};
