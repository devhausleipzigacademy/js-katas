const meta = {
  title: "Check For Array Length Even",
  codeFiles: ["arrayLengthEven.js"]
};

  function returnFeedback(testValue, source, answer, explanation) {
  if (typeof testValue !== 'boolean') {
    return {
      error: 'Output is not a Boolean value'
    };
  }
  if ( !/\)\s?\{.*\.length.*\}/.test(source)) {
    return {
      error: "No 'length' property look-up detected"
    };
  }
  if (testValue !== answer) {
    const output = {
      error: 'Incorrect output'
    };
    if (explanation) {
      output["explanation"] = explanation
    }
    return { ...output};
  }
  else {
    return {
      success: "Looks like it's working"
    };
  };
  };

  test(
  `arrayLengthEven([1,2,3,4,5]);`,
  () => arrayLengthEven([1,2,3,4,5]),
  (testValue, source) => {
    return returnFeedback(testValue, source, false);
  }
  );

  test(
  `arrayLengthEven(['little','piggy','went','to','town']);`,
  () => arrayLengthEven(['little','piggy','went','to','town']),
  (testValue, source) => {
    return returnFeedback(testValue, source, false);
  }
  );

  test(
  `arrayLengthEven(['too','swole','to','control']);`,
  () => arrayLengthEven(['too','swole','to','control']),
  (testValue, source) => {
    return returnFeedback(testValue, source, true);
  }

  test(
  `arrayLengthEven([]);`,
  () => arrayLengthEven([]),
  (testValue, source) => {
    return returnFeedback(testValue, source, true, "Zero is an even number");
  }
  );
