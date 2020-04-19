function callbackTimeout(waitTime) {
  console.log(`I'll call you back in ${waitTime} milliseconds.`);
  setTimeout(
    function() { /*some behavior goes here*/},
    waitTime
  );
};

// or

const callback = function() { /*some behavior goes here*/ }

function callbackTimeout(waitTime) {
  console.log(`I'll call you back in ${waitTime} milliseconds.`);
  setTimeout(
    callback,
    waitTime
  );
};

// choose one of the above versions; they behave identically
