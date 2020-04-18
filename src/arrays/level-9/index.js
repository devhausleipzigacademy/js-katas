const meta = {
  title: "Push To Array",
  codeFiles: ["pushToArray.js"]
};

function returnFeedback(testValue, source, answer, explanation) {
  if (!Array.isArray(testValue)) {
    return {
      error: 'Output is not an array'
    };
  }
  if ( !/\)\s?\{.*\.push\(.*\}/.test(source)) {
    return {
      error: "No 'push' method call detected"
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
`pushToArray(['I','B','S'], 'is', 'no', 'fun');`,
() => pushToArray(['I','B','S'], 'is', 'no', 'fun'),
(testValue, source) => {
  return returnFeedback(testValue, source, ['I','B','S', 'is', 'no', 'fun']);
}
);

test(
`pushToArrayForEach(['Snow White'],['Dopey', 'Doc', 'Bashful', 'Happy', 'Grumpy', 'Sleepy', 'Sneezy']);`,
() => pushToArrayForEach(['Snow White'],['Dopey', 'Doc', 'Bashful', 'Happy', 'Grumpy', 'Sleepy', 'Sneezy']),
(testValue, source) => {
  return returnFeedback(testValue, source, ['Snow White', 'Dopey', 'Doc', 'Bashful', 'Happy', 'Grumpy', 'Sleepy', 'Sneezy']);
}
);
