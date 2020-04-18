const meta = {
  title: "Create Object From Arguments",
  codeFiles: ["createObjFromArgs.js"]
};

function returnFeedback(testValue, source, answer) {
  if (typeof testValue != 'object' || testValue == null) {
    return {
      error: "Output is not of type 'Object'!"
    };
  }
  if (testValue.username !== answer.username || testValue.email !== answer.email) {
    return {
      error: 'Incorrect output!',
      explanation: `${testValue}`
    }
  }
  else {
    return {
      success: "Looks like it's working"
    };
  };
};

test(
  `createUser('Harry Potter', 'potter@420.com');`,
  () => createUser('Harry Potter', 'potter@420.com'),
  (testValue, source) => {
    return returnFeedback(testValue, source, {username: 'Harry Potter', email: 'potter@420.me'})
  }
);

test(
  `createUser('Boogie Woogie', 'chewbacca@scare.me');`,
  () => createUser('Boogie Woogie', 'chewbacca@scare.me'),
  (testValue, source) => {
    return returnFeedback(testValue, source, {username: 'Boogie Woogie', email: 'chewbacca@scare.me'})
  }
);
