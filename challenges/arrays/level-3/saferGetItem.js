function saferGetItem(array, index) {
  if (index < 0 || index >= array.length) {
    throw new Error("Index out of bounds");
  }
  return array[index];
}
