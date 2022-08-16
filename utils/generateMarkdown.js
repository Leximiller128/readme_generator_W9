// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ## License Badge 
  ${data.license}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests) 
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing 
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have questions about this project, you can reach me at ${data.email} or my github ${data.githubUserName}.
`;
}

module.exports = generateMarkdown;
