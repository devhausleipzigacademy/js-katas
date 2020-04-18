const meta = {
  title: "Concatenate Arrays",
  codeFiles: ["concatArrays.js"]
};

function returnFeedback(testValue, source, answer, explanation) {
  if (!Array.isArray(testValue)) {
    return {
      error: 'Output is not an array'
    };
  }
  if ( !/\)\s?\{.*\.concat\(.*\}/.test(source)) {
    return {
      error: "No 'concat' method call detected"
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
`concatArrays([1,2,3], [5,6,7]);`,
() => concatArrays([1,2,3], [5,6,7]),
(testValue, source) => {
  return returnFeedback(testValue, source, [1,2,3,5,6,7]);
}
);

test(
`concatArrays(['a','b','c'], ['e','f','g']);`,
() => concatArrays(['a','b','c'], ['e','f','g']),
(testValue, source) => {
  return returnFeedback(testValue, source, ['a','b','c','e','f','g']);
}
);

test(
`concatArrays([{a:1,b:'2'}], ['sinister']);`,
() => concatArrays([{a:1,b:'2'}], ['sinister']),
(testValue, source) => {
  return returnFeedback(testValue, source, [{a:1,b:'2'},'sinister']);
}
);
