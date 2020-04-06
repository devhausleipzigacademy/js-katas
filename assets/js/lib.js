const tests = [];

function test(description, execute, validate) {
  tests.push({
    description,
    execute,
    validate,
  });
}

function toJSString(value) {
  if (typeof value == "string") {
    return `"${value}"`;
  } else if (value === null) {
    return "null";
  } else if (value === undefined) {
    return "undefined";
  } else if (Array.isArray(value)) {
    return `[${value.map(toJSString).join(", ")}]`;
  } else {
    return String(value);
  }
}

function eq(a, b) {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length != b.length) return false;
    return a.every((element, index) => eq(element, b[index]));
  }
  if (typeof a == "object" && typeof b == "object") {
    if (a === null || b === null) return false;
    const keys = Object.keys(a);
    return (
      keys.every((key) => eq(a[key], b[key])) &&
      Object.keys(b).length == keys.length
    );
  }
  return false;
}

function assertEqual(value) {
  return function (testValue) {
    if (eq(value, testValue)) {
      return {
        success: `${toJSString(value)}`,
      };
    } else {
      return {
        explanation: `Received:\n${toJSString(testValue)}`,
        error: `Expected:\n${toJSString(value)}`,
      };
    }
  };
}

function assertThrows() {
  return function (testValue, source, exception) {
    if (!exception) {
      return {
        explanation: `Expression evaluated to:\n${toJSString(testValue)}`,
        error: "Expected an Exception",
      };
    } else {
      return {
        success: `${toJSString(exception)}`,
      };
    }
  };
}
