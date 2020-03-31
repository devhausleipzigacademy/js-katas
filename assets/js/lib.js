const tests = [];

function test(description, execute, validate) {
  tests.push({
    description,
    execute,
    validate
  });
}

function toJSString(value) {
  if (typeof value == "string") {
    return `"${value}"`;
  } else {
    return value;
  }
}

function assertEqual(value) {
  return function(testValue) {
    if (value == testValue) {
      return {
        success: `${toJSString(value)}`
      };
    } else {
      return {
        explanation: `Received:\n${toJSString(testValue)}`,
        error: `Expected:\n${toJSString(value)}`
      };
    }
  };
}
