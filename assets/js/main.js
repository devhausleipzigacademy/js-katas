// Load files

function loadURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    lesson: urlParams.get("lesson"),
    level: urlParams.get("level")
  };
}

async function readConfig() {
  return await fetch("../../config.json").then(res => res.json());
}

async function loadScript(path) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.setAttribute("src", path);
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      resolve();
    });
    script.addEventListener("error", () => {
      reject();
    });
  });
}

async function readMarkdown(path) {
  const md = await fetch(path).then(res => res.text());
  return marked(md);
}

class DomConsole {
  constructor(element) {
    this.element = element;
  }
  write(value, className, highlight = false) {
    const line = document.createElement("span");
    line.textContent = value + "\n";
    line.classList.add(className);
    if (highlight) {
      hljs.highlightBlock(line);
    }
    this.element.appendChild(line);
  }
  header(value) {
    this.write(value, "header");
  }
  log(value) {
    this.write(value, "log");
  }
  message(value) {
    this.write(value, "message");
  }
  error(value) {
    this.write(value, "error");
  }
  success(value) {
    this.write(value, "success");
  }
}

const testConsole = new DomConsole(document.getElementById("console-output"));

function runTests(source) {
  testConsole.header(">>> Running Tests");
  tests.forEach((test, index) => {
    testConsole.log(test.description);
    const testValue = test.execute();
    const { message, success, error, explanation } = test.validate(
      testValue,
      source
    );

    if (message) {
      testConsole.message(message);
    }
    if (error) {
      testConsole.error(error);
      if (explanation) {
        testConsole.message(explanation);
      }
      throw "";
    }
    if (success) {
      testConsole.log(success);
    }

    testConsole.success("Test passed");
  });

  testConsole.success("\n   All tests passed!");
  document.body.classList.add("completed");
}

async function executeFile(fileName, script) {
  try {
    testConsole.header(`>>> Running ${fileName}`);
    window.eval(script);

    runTests(script);
  } catch (error) {
    testConsole.error(error);
    testConsole.error("\n   Tests failed");
  }
}

async function main() {
  const { root } = await readConfig();

  let { level, lesson } = loadURLParams();

  if (lesson == null || level == null) {
    lesson = "strings";
    level = "1";
  }

  try {
    await loadScript(`../../src/${lesson}/level-${level}/index.js`);
  } catch (error) {
    console.log("Level doesn't exist, redirecting to home page...");
    window.location.replace("../../index.html");
  }

  document.getElementById("markdown-output").innerHTML = await readMarkdown(
    `../../src/${lesson}/level-${level}/index.md`
  );

  document.querySelectorAll("#markdown-output pre code").forEach(block => {
    hljs.highlightBlock(block);
  });

  document.getElementById("title").textContent = meta.title;
  document.querySelector(
    ".level-path"
  ).textContent = `${lesson[0].toUpperCase()}${lesson.substr(
    1
  )} - Level ${level}`;
  document
    .getElementById("next-link")
    .setAttribute(
      "href",
      `index.html?lesson=${lesson}&level=${Number(level) + 1}`
    );
  document
    .getElementById("previous-link")
    .setAttribute(
      "href",
      `index.html?lesson=${lesson}&level=${Number(level) - 1}`
    );

  const codeSection = document.querySelector(".code");

  meta.codeFiles.forEach(async function(fileName) {
    const repositoryPath = `challenges/${lesson}/level-${level}/${fileName}`;
    const fileUrl = "../../" + repositoryPath;
    const vscodeURL = `vscode://file/${root}/${repositoryPath}`;

    const link = document.createElement("a");
    link.setAttribute("href", vscodeURL);
    link.textContent = fileName;

    const fileContent = await fetch(fileUrl).then(res => res.text());

    const content = document.createElement("pre");
    content.textContent = fileContent;
    content.classList.add("lang-js");

    hljs.highlightBlock(content);

    const codeFile = document.createElement("div");
    codeFile.classList.add("code-file");
    codeFile.appendChild(link);
    codeFile.appendChild(content);

    codeSection.appendChild(codeFile);

    if (fileName.endsWith(".js")) {
      executeFile(fileName, fileContent);
    }
  });
}

main();
