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
