const meta = {
  title: "Check if Object has property",
  codeFiles: ["objHasProp.js"]
};

function returnFeedback(testValue, source, answer) {
  if (typeof testValue !== 'boolean') {
    return {
      error: 'Output is not a Boolean value!'
    };
  }
  if ( /)\s?\{*\.hasOwnProperty\(*\}/.test(source)) {
    return {
      error: "Don't use the 'hasOwnProperty' method!"
    };
  }
  if (testValue !== answer) {
    return {
      error: 'Incorrect output!',
      explanation: `${testValue}`
    }
  }
  else {
    return {
      success: "Looks like it's working"
    };
  };
};

const anObj.realProperty = 'I exist.';

test(
  `objectHasProperty(anObj, 'realProperty');`,
  () => objectHasProperty(anObj, 'realProperty'),
  (testValue, source) => {
    return returnFeedback(testValue, source, true);
  }
);

test(
  `objectHasProperty(anObj, 'fakeProperty');`,
  () => objectHasProperty(anObj, 'fakeProperty'),
  (testValue, source) => {
    return returnFeedback(testValue, source, false);
  }
);
