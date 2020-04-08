function repeatArray(array) {
  return array.concat(array);
}

function withoutFirstAndLast(array) {
  return array.slice(1, array.length - 1);
}

function addElementToBeginning(array, newElement) {
  array.splice(0, 0, newElement);
  return array;
}

function removeSecondItem(array) {
  array.splice(1, 1);
  return array;
}
