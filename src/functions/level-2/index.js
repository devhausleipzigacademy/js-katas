const meta = {
  title: "Intro to Callbacks",
  codeFiles: ["callbackTimeout.js"]
};

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function asyncCaptureConsoleLog(fn, waitTime) {
  let logger = console.log;
  let log = [];
  console.log = (m) => {
    log.push(m);
  };
  fn(waitTime);
  console.log = (...args) => {};
  await timeout(waitTime - 10);
  console.log = (m) => {
    log.push(m);
  };
  await timeout(30);
  console.log = logger;
  return [log, waitTime];
}

answer = ["I'll call you back in ${waitTime} seconds.",'']

// didn't want to have to use eval() but yet again there is no run-time introspection, so you can't make the template interpolation work with function arguments unless you use a workaround like eval()
// do we just have to write our own library that overrides the function constructor, wrapping functions in a nice way to provide run-time introspection??

test(
  `callbackTimeout(1000);`,
  () => asyncCaptureConsoleLog( callbackTimeout(), 1000),
  (testValue, source) => {
    let waitTime;
    for (const entry in testValue[0]) {
      if (!answers[entry]) {
        if ( log[entry] ) {
          return { success: "Looks like it's working"}
        }
        return { error: 'Incorrect output!', explanation: `${log[entry]}`}
      }
      waitTime = testValue[1]; //this binding should be accessible inside the eval by the template literal, allowing waitTime to be interpolated
      if ( log[entry] !== eval('`'+answers[entry]+'`') ) {
          return { error: 'Incorrect output!', explanation: `${log[entry]}`}
        }
      };
      return { success: "Looks like it's working"}
    }
  }
);

test(
  `callbackTimeout(3000);`,
  () => asyncCaptureConsoleLog( callbackTimeout(), 3000),
  (testValue, source) => {
    let waitTime;
    for (const entry in testValue[0]) {
      if (!answers[entry]) {
        if ( log[entry] ) {
          return { success: "Looks like it's working"}
        }
        return { error: 'Incorrect output!', explanation: `${log[entry]}`}
      }
      waitTime = testValue[1]; //this binding should be accessible inside the eval by the template literal, allowing waitTime to be interpolated
      if ( log[entry] !== eval('`'+answers[entry]+'`') ) {
          return { error: 'Incorrect output!', explanation: `${log[entry]}`}
        }
      };
      return { success: "Looks like it's working"}
    }
  }
);
