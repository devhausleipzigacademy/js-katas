var xor = function(a, b) {
  return (a && !b) || (!a && b);
  // OR
  // return Boolean(a ^ b);
};
