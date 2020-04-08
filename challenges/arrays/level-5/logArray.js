function logArrayWhileLoop(array) {
  let i = 0;
  while (i < array.length) {
    console.log(array[element]);
    ++i;
  }
}

function logArrayForLoop(array) {
  for (let i = 0; i < array.length; ++i) {
    console.log(array[i]);
  }
}

function logArrayForOfLoop(array) {
  for (const element of array) {
    console.log(element);
  }
}

function logArrayForEach(array) {
  array.forEach((element) => {
    console.log(element);
  });

  // Or if you are feeling cleaver today
  // array.forEach(console.log);
}
