
const _ = require('lodash');

const meta = {
  title: "Default Param",
  codeFiles: ["defaultParam.js"]
};

function iterateComparison

function returnFeedback(testValue, source, answer) {
  if ( Array.isArray(testValue) ) {
    return {
      error: 'Output is not an Array!'
    };
  if ( !_.isEqual(testValue, answer) ) {
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

test(
  `map([1,2,3,4,5,6,7,8], 2, undefined);`,
  () => map([1,2,3,4,5,6,7,8], 2, undefined),
  (testValue, source) => {
    return returnFeedback(testValue, source, [3,4,5,6,7,8])
  }
);

test(
  `map([1,2,3,4,5,6,7,8], undefined, powerOfTwo(array, currentIndex, value);`,
  () => map([1,2,3,4,5,6,7,8], undefined, powerOfTwo(array, currentIndex, value),
  (testValue, source) => {
    return returnFeedback(testValue, source, [2,4,8,16,32,64,128,256])
  }
);
