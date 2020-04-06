const meta = {
  title: "Log Array",
  codeFiles: ["logArray.js"],
};

function captureConsoleLog(fn) {
  let logger = console.log;
  let log = "";
  console.log = (m) => {
    log += `${m}\n`;
  };

  fn();

  console.log = logger;
  return log;
}

test(
  `logArrayForLoop(["a", "b", "c"])`,
  () => captureConsoleLog(() => logArrayForLoop(["a", "b", "c"])),
  (testValue, source) => {
    if (testValue != "a\nb\nc\n") {
      return {
        error: "Incorrect or missing Log Output",
        explanation: `${testValue}`,
      };
    }
    if (!/for\s*\(let/.test(source)) {
      return {
        error: "No for key word detected in code",
      };
    } else {
      return {
        success: "for loop seems to work",
      };
    }
  }
);

test(
  `logArrayForOfLoop(["a", "b", "c"])`,
  () => captureConsoleLog(() => logArrayForOfLoop(["a", "b", "c"])),
  (testValue, source) => {
    if (testValue != "a\nb\nc\n") {
      return {
        error: "Incorrect or missing Log Output",
        explanation: `${testValue}`,
      };
    }
    if (!/for[\s\w(*]*\s+of\s+/.test(source)) {
      return {
        error: "No for of loop detected in code",
      };
    } else {
      return {
        success: "for of loop seems to work",
      };
    }
  }
);

test(
  `logArrayForEach(["a", "b", "c"])`,
  () => captureConsoleLog(() => logArrayForEach(["a", "b", "c"])),
  (testValue, source) => {
    if (testValue != "a\nb\nc\n") {
      return {
        error: "Incorrect or missing Log Output",
        explanation: `${testValue}`,
      };
    }
    if (!/\.forEach/.test(source)) {
      return {
        error: "No forEach method call detected in code",
      };
    } else {
      return {
        success: "forEach seems to work",
      };
    }
  }
);
