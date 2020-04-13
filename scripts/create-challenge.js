const fs = require("fs");
const path = require("path");

const lesson = process.argv[2];
const level = process.argv[3];
let filename = process.argv[4];

if (!lesson || !level || !filename) {
  console.log("Usage: <lesson> <level> <filename>");
  exit(1);
}

if (!/.*\.\w{2,4}$/u.test(filename)) {
  console.log("No valid file extension detected in filename; '.js' appended to given filename.")
  filename = filename.concat('.js');
}

const repo = path.resolve(__dirname, "..");

const src = path.resolve(repo, "src", lesson, `level-${level}`);
const challenges = path.resolve(repo, "challenges", lesson, `level-${level}`);
fs.mkdirSync(src, { recursive: true });
fs.mkdirSync(challenges, { recursive: true });
fs.copyFileSync(
  path.resolve(repo, "assets/templates/src/index.md"),
  src + "/index.md"
);
fs.copyFileSync(
  path.resolve(repo, "assets/templates/src/index.js"),
  src + "/index.js"
);
fs.writeFileSync(path.resolve(challenges, filename), "");
