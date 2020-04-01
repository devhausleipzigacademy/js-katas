test("> newLine", () => newLine, assertEqual("\n"));

test(
  "> windowsFilePath",
  () => windowsFilePath,
  assertEqual("C:\\Users\\Rick\\Desktop")
);

test("> emoji", () => emoji, assertEqual("\u{1F600}"));

const meta = {
  title: "String Escape",
  codeFiles: ["string-escape.js"]
};
