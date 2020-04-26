const meta = {
  title: "numArgs",
  codeFiles: ["numArgs.js"]
};

function returnFeedback(testValue, source, answer) {
  if (typeof testValue !== 'number') {
    return {
      error: 'Output is not a Number value!'
    };
  }
  if (testValue !== answer) {
    return {
      error: 'Incorrect output!',
      explanation: `Received ${testValue}, expected ${answer}`
    }
  }
  else {
    return {
      success: "Looks like it's working"
    };
  };
};

test(
  `numArgs();`,
  () => numArgs(),
  (testValue, source) => {
    return returnFeedback(testValue, source, 0);
  }
);

test(
  `numArgs(1, 2, 3, [4, 5, 6, 7]);`,
  () => numArgs(1, 2, 3, [4, 5, 6, 7]),
  (testValue, source) => {
    return returnFeedback(testValue, source, 4);
  }
);

test(
  `numArgs({ z:{ x: 'y' } }, ['a','b','c'], 3, 4, 5, 6);`,
  () => numArgs({ z:{ x: 'y' } }, ['a','b','c'], 3, 4, 5, 6),
  (testValue, source) => {
    return returnFeedback(testValue, source, 6);
  }
);
