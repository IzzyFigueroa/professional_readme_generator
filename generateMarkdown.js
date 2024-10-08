import fs from 'fs';
import inquirer from "inquirer";
import { questions, writeToFile } from './index.js';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'MIT': '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-green.svg)',
    'BSD 3-Clause': '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)'
  };

  if (!license) {
    return '';
  } else {
    return badges[license];
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'

  };
  return licenseLinks[license];
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License\nThis project is licensed under the terms of the ${license}. For more information, please visit ${renderLicenseLink(license)}.\n`;
}


// TODO: Create a function to generate markdown for README
async function generateMarkdown() {

  const answers = await inquirer.prompt(questions);
  const content = `
  # ${answers.title}
  # ${renderLicenseBadge(answers.license)}

  ## Table of Contents
  - [Questions](#questions)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Testing](#testing)
  - [License](#license)

  ## Questions\n My Github username is https://github.com/${answers.github}
  \n Please contact me at ${answers.email}

  ## Description\n ${answers.description}

  ## Installation\n ${answers.installInstructions}
  ## Usage\n ${answers.usage}

  ## Contribution Guidelines\n ${answers.contribution}
  ## Testing\n ${answers.testing}

  ${renderLicenseSection(answers.license)}

`;
  writeToFile('README.md', content);

}

export default generateMarkdown;
