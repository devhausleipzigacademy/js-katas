const meta = {
  title: "Null is type 'Object'",
  codeFiles: ["nullIsTypeObject.js"]
};

function returnFeedback(testValue, source, answer) {
  if (typeof testValue !== 'boolean') {
    return {
      error: 'Output is not a Boolean value!'
    };
  }
  if ( !/)\s?\{.*typeof.*\}/.test(source)) {
    return {
      error: "No instance of 'typeof' operator detected"
    };
  }
  if ( !/)\s?\{.*if\s\(.*null.*\).*\}/.test(source)) {
    return {
      error: "No check for value equal to 'null' detected"
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

const anObj = { key: 'value' };
const notAnObj = null;

test(
  `checkIfObject(anObj);`,
  () => checkIfObject(anObj),
  (testValue, source) => {
    return returnFeedback(testValue, source, true);
  }
);

test(
  `checkIfObject(notAnObj);`,
  () => checkIfObject(notAnObj),
  (testValue, source) => {
    return returnFeedback(testValue, source, false);
  }
);
