const _ = require('lodash');

const meta = {
  title: "Throw Exception on Null Argument",
  codeFiles: ["exceptionNullArg.js"]
};

let isError = function(e){
 return e && e.stack && e.message;
}

function returnFeedback(testValue, source, errorFlag, answer) {
  if ( errorFlag && !isError(testValue) ) {
    return {
      error: 'Did not detect an error when expected'
    };
  }
  else if ( !_.isEqual(testValue, answer) ) {
    return {
      error: 'Incorrect output!'
    }
  }
  return {
      success: "Looks like it's working"
  };
};

test(
  `exceptionNullArg('stringCheese');`,
  () => {
    try {
      const val = exceptionNullArg('stringCheese');
      return val;
    }
    catch(error) {
      return error;
    }
  },
  (testValue, source) => {
    return returnFeedback(testValue, source, 0, 'stringCheese');
  }
);

test(
  `exceptionNullArg(69);`,
  () => {
    try {
      const val = exceptionNullArg(69);
      return val;
    }
    catch(error) {
      return error;
    }
  },
  (testValue, source) => {
    return returnFeedback(testValue, source, 0, 69);
  }
);

test(
  `exceptionNullArg( {meAmIs: 'anObject'} );`,
  () => {
    try {
      const val = exceptionNullArg( {meAmIs: 'anObject'} );
      return val;
    }
    catch(error) {
      return error;
    }
  },
  (testValue, source) => {
    return returnFeedback(testValue, source, 0, {meAmIs: 'anObject'});
  }
);

test(
  `exceptionNullArg(null);`,
  () => {
    try {
      const val = exceptionNullArg(null);
      return val;
    }
    catch(error) {
      return error;
    }
  },
  (testValue, source) => {
    return returnFeedback(testValue, source, 1);
  }
);
