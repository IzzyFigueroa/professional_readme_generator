import inquirer from "inquirer";

// import {promsises as fs} from 'fs

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const licenseLinks = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'Apache 2.0 License': 'https://opensource.org/licenses/Apache-2.0',
    'GNU GPL v3 License': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause License': 'https://opensource.org/licenses/BSD-3-Clause',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0'
  };
  return licenseLinks[license];
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License\nThis project is licensed under the terms of the ${license}. For more information, please visit [this link]($
  {renderLicenseLink(license)}).\n`;
}


// TODO: Create a function to generate markdown for README
async function generateMarkdown() {
  const answers = await inquirer.prompt(questions);
  return `# ${answers.title}
  # Description\n ${answers.description}
  # Installation\n ${answers.installInstructions}
  # Usage\n ${answers.usage}
  # Contribution Guidelines\n ${answers.contribution}
  # Testing\n ${answers.testing}
  ${renderLicenseSection(answers.license)}
`;


}

export default generateMarkdown;
