function pushToArray(array, ...argumentsForPush) {
  return changeMe.replaceThisMethodCall( ...argumentsForPush);
}

function pushToArrayForEach(array, arrayOfPushArgs) {
  arrayOfPushArgs.forEach( (pushArg) => {
    // stuff to do with each element
  });
  return array;
}
