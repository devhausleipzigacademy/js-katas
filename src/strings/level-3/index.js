test("> newLine", () => newLine, assertEqual("\n"));

test(
  "> windowsFilePath",
  () => windowsFilePath,
  assertEqual("C:\\Users\\Rick\\Desktop")
);

test("> emoji", () => emoji, assertEqual("\u{1F600}"));

const meta = {
  title: "String Escape",
  levelPath: "String - Level 3",
  previousLink: "../level-2/index.html",
  nextLink: "../../../index.html",
  codeFiles: ["challenges/strings/level-3/string-escape.js"]
};
