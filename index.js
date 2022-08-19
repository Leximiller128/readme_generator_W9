//packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

//array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install this project?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license do you want to use?",
    choices: ["Mozilla", "Apache", "IBM", "MIT"],
  },
  {
    type: "input",
    name: "usage",
    message: "Write out the intended use of this application",
  },
  {
    type: "input",
    name: "contributing",
    message: "List all contributors",
  },
  {
    type: "input",
    name: "tests",
    message: "Write out any tests you'd like to offer",
  },
  {
    type: "input",
    name: "githubUserName",
    message: "Enter your Github Username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      writeToFile("README.md", generateMarkdown(answers));
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
