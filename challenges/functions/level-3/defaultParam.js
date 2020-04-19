const default = function() {
  // your code goes here
};

function map(array, startIndex, callback = default) {
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (startIndex > array.length) {
    startIndex = array.length;
  }
  const newArray = [];

  for (let index = startIndex; index < array.length; i++) {
    newArray[index] = callback(array, index, array[index]);
  }
};
