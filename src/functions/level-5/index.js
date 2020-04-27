const meta = {
  title: "Call & Apply Functions",
  codeFiles: ["callApplyFunction.js"]
};

function returnFeedback(testValue, source, answer) {
  if (typeof testValue !== 'number') {
    return {
      error: 'Output is not a Number value!'
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

function addThreeNumbers(num1, num2, num3) {
  return (num1 + num2 + num3);
}

function addFiveNumbers(num1, num2, num3, num4, num5) {
  return (num1 + num2 + num3 + num4 + num5);
}

test(
  `call(addThreeNumbers, [5, 7, 11]);`,
  () => call(addThreeNumbers, [5, 7, 11]),
  (testValue, source) => {
    return returnFeedback(testValue, source, addThreeNumbers(5, 7, 11));
  }
);

test(
  `apply(addThreeNumbers, 5, 7, 11);`,
  () => apply(addThreeNumbers, 5, 7, 11),
  (testValue, source) => {
    return returnFeedback(testValue, source, addThreeNumbers(5, 7, 11));
  }
);


test(
  `call(addFiveNumbers, [13, 17, 19, 22, 23]);`,
  () => call(addFiveNumbers, [13, 17, 19, 22, 23]),
  (testValue, source) => {
    return returnFeedback(testValue, source, addFiveNumbers(13, 17, 19, 22, 23));
  }
);

test(
  `apply(addFiveNumbers, 13, 17, 19, 22, 23);`,
  () => apply(addFiveNumbers, 13, 17, 19, 22, 23),
  (testValue, source) => {
    return returnFeedback(testValue, source, addFiveNumbers(13, 17, 19, 22, 23));
  }
);
