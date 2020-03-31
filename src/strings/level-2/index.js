test(
  "> fortuneTeller('Duck', 'blue', 'Cheetahs')",
  () => fortuneTeller("Duck", "blue", "Cheetahs"),
  assertEqual(
    "Those born under the planetary sign of the Duck possess blue personalities and are forever searching for new Cheetahs to conquer."
  )
);

const meta = {
  title: "String Methods",
  levelPath: "String - Level 2",
  previousLink: "../level-1/index.html",
  nextLink: "../level-3/index.html",
  codeFiles: ["challenges/strings/level-1/fortune-teller.js"]
};
