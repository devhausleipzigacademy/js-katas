const meta = {
  title: "Pad String With Zeros",
  codeFiles: ["zeroPadding.js"]
};

function returnFeedback(testValue, source, answer) {
  if (typeof testValue !== 'string') {
    return {
      error: 'Output is not a string!'
    };
  }
  if ( /)\s*\{.*\.repeat\(.*\}/.test(source)) {
    return {
      error: "No 'repeat' method call detected"
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

test(
  `zeroPadding('padMeBabyOhhYea', 5);`,
  () => zeroPadding('padMeBabyOhhYea', 5),
  (testValue, source) => {
    return returnFeedback(testValue, source, '00000padMeBabyOhhYea')
  }
);

test(
  `zeroPadding('chunkyboi', 0);`,
  () => zeroPadding('chunkyboi', 0),
  (testValue, source) => {
    return returnFeedback(testValue, source, 'chunkyboi')
  }
);
