// Load files

async function readConfig() {
  return await fetch("../../../config.json").then(res => res.json());
}

async function readMarkdown() {
  const md = await fetch("index.md").then(res => res.text());
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

function runTests() {
  testConsole.header(">>> Running Tests");
  tests.forEach((test, index) => {
    testConsole.log(test.description);
    const testValue = test.execute();
    const { message, success, error, explanation } = test.validate(testValue);

    if (message) {
      console.message(message);
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

    runTests();
  } catch (error) {
    testConsole.error(error);
    testConsole.error("\n   Tests failed");
  }
}

async function main() {
  const { root } = await readConfig();

  document.getElementById("markdown-output").innerHTML = await readMarkdown();

  document.getElementById("title").textContent = meta.title;
  document.querySelector(".level-path").textContent = meta.levelPath;
  document.getElementById("next-link").setAttribute("href", meta.nextLink);
  document
    .getElementById("previous-link")
    .setAttribute("href", meta.previousLink);

  const codeSection = document.querySelector(".code");

  meta.codeFiles.forEach(async function(repositoryPath) {
    const fileUrl = "../../../" + repositoryPath;
    const fileName = repositoryPath.substr(repositoryPath.lastIndexOf("/") + 1);
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
