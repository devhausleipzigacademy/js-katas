const meta = {
  title: "Const",
  codeFiles: ["const.js"]
};

test(
  "Check bindings",
  () => {},
  (value, source) => {
    const lines = source.split("\n");
    if (
      lines[0].includes("const") &&
      lines[1].includes("let") &&
      lines[2].includes("const") &&
      lines[3].includes("let")
    ) {
      return {
        success: "Well done! This looks good."
      };
    } else {
      return {
        error: "Not there yet...try again."
      };
    }
  }
);
