function objectHasProperty(object, property) {
  if (typeof object != 'object' || object == null) {
    throw Error('First argument must be of type Object')
  }
  if (typeof property != 'string') {
    throw Error('Second argument must be of type string')
    }
  // your code goes here
};
