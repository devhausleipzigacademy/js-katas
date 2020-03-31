const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  path.resolve(__dirname, "..", "config.json"),
  JSON.stringify({
    root: path.resolve(__dirname, "..")
  })
);
