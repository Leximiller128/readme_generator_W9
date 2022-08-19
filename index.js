// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
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
    type: "input",
    name: "table of contents",
    message: "List your table of contents",
  },
  {
    type: "list",
    name: "license",
    message: "Which license do you want to use?",
    choices: ["Mozilla", "Apache", "IBM", "MIT"],
  },
  {
    type: "input",
    name: "github username",
    message: "Enter your Github Username",
  },
  {
    type: "input",
    name: "email address",
    message: "Enter your email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
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
