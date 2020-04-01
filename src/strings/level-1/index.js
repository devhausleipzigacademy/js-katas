test(
  "> fortuneTeller('Duck', 'blue', 'Cheetahs')",
  () => fortuneTeller("Duck", "blue", "Cheetahs"),
  assertEqual(
    "Those born under the planetary sign of the Duck possess blue personalities and are forever searching for new Cheetahs to conquer."
  )
);

const meta = {
  title: "Fortune Teller",
  codeFiles: ["fortune-teller.js"]
};
