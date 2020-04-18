const meta = {
  title: "Check if Object has method",
  codeFiles: ["isMethod.js"]
};

function returnFeedback(testValue, source, answer) {
  if (typeof testValue !== 'boolean') {
    return {
      error: 'Output is not a Boolean value!'
    };
  }
  if ( !/)\s?\{*objectHasProperty\(*\}/.test(source)) {
    return {
      error: "No call to 'objectHasProperty' detected"
    };
  }
  if ( !/)\s?\{*typeof*\}/.test(source)) {
    return {
      error: "No instance of 'typeof' operator detected"
    };
  }
  if (testValue !== answer) {
    return {
      error: 'Incorrect output!'
    }
  }
  else {
    return {
      success: "Looks like it's working"
    };
  };
};

const anObj.realMethod = function() { return console.log('I exist!')};

test(
  `isMethod(anObj, 'realMethod');`,
  () => isMethod(anObj, 'realMethod'),
  (testValue, source) => {
    return returnFeedback(testValue, source, true)
  }
);

test(
  `isMethod(anObj, 'fakeMethod');`,
  () => isMethod(anObj, 'fakeMethod'),
  (testValue, source) => {
    return returnFeedback(testValue, source, false)
  }
);
