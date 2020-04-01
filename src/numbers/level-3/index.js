const generator = () => {
  const result = [];
  for (let i = 0; i < 30; ++i) {
    result.push(randomBit());
  }
  return result;
};

test("> Checking if function only returns bits: 0 or 1", generator, values => {
  if (values.every(n => n === 1 || n === 0)) {
    return { success: values };
  } else {
    return {
      error: "Found values that are neither 0 nor 1",
      explanation: String(values)
    };
  }
});

test("> Checking if there's some amount of randomness", generator, values => {
  var numZeros = values.filter(n => n == 0).length;
  if (numZeros > 0.2 * values.length && numZeros < 0.8 * values.length) {
    return {
      success: "More than 20% and less than 80% of the values are zeros"
    };
  } else {
    return {
      error:
        "The result doesn't seem to be random. Maybe you got unlucky, but that's really unlikely. Does this look random to you?",
      explanation: values
    };
  }
});

const meta = {
  title: "Random Bit",
  codeFiles: ["random-bit.js"]
};
