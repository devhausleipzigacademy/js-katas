const meta = {
  title: "Add Properties to Object",
  codeFiles: ["addProperties.js"]
};

function captureConsoleLog(fn) {
  let logger = console.log;
  let log = "";
  console.log = (m) => {
    log += `${m}\n`;
  };

  fn();

  console.log = logger;
  return log;
}

function returnFeedback(testValue, source, array) {
  const [testCase, flag] = array;
  if ( flag ) {
    if ( captureConsoleLog( () => eval(testCase) ) !== 'Are you sure you want to add a property with a non-standard identifier?\n') {
      return {
        error: 'Cannot detect requested log message when non-standard identifiers are passed'
      };
    }
  }
  // I know this is pretty dumb but I didn't want to rewrite the .forEach below; I wanted to not have to keep repeating the same code.
  // This is why aspect-oriented programming features would be nice: being able to intercept function calls and inspect passed arguments at run-time.
  // Or is there a better way of conceptualizing run-time introspection?
  eval(`{
    const argsString = /(?<=\().*(?=\))/.exec(testCase);
    argsString = argsString.replace(/'/g, '"');
    argsString = argsString.replace(/\`/g, '"');
    const args = JSON.parse(\`[${argsString}]\`);
  }`)
  if ( args[0][args[1]] == args[2] ) {
    return {
      success: "Looks like it's working"
    };
  }
  else {
    return { error: "New property either not found or wrong value"}
  }
};

const anObject = {};
const notAnObject = 1;
const notAString = null;

test(
  `addProperty(notAnObject, 'key', 'value');`,
  () => addProperty(notAnObject, 'key','value'),
  (testValue, source) => {
    return testValue
  };
);

test(
  `addProperty(anObject, notAString, 'value');`,
  () => addProperty(anObject, notAString, 'value'),
  (testValue, source) => {
    return testValue
  };
);

[[`addProperty(anObject, '$', 'some value')`,0], [`addProperty(anObject, '_myProperty', '1')`,0], [`addProperty(anObject, 'property3', 'vaccines cause autism')`,0], ["addProperty(anObject, '8', 'some value')",1], [`addProperty(anObject, "'key'", 'opens locks')`,1], ['addProperty(anObject, `"keyLime"`, "pie")',1], ["addProperty(andObject, '`ki`', 'chi, prana')",1]]
  .forEach( array => {
    test(
      `${array[0]};`,
      () => eval(array[0]),
      (testValue, source, array) => {
        return returnFeedback(testValue, source, array);
      };
    );
  }
)
