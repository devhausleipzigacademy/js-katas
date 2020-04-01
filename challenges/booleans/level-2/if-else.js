var getHexCode = function(color) {
  if (color == "red") {
    return 0xff0000;
  } else if (color == "blue") {
    return 0x0000ff;
  } else if (color == "green") {
    return 0x00ff00;
  } else if (color == "yellow") {
    return 0xffff00;
  } else {
    return 0x000000;
  }
};
