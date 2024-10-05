// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';
import figlet from 'figlet';
import { error } from 'console';
// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Please enter the title of your README?',
        name: 'title'
    },
    {
        message: 'Please enter the description of your README.',
        name: 'description'
    },
    {
        message: 'Please provide the installation instructions',
        name: 'installInstructions'
    },
    {
        message: 'What is the usage of this file?',
        name: 'usage'
    },
    {
        message: 'What are the contribution guidelines?',
        name: 'contribution'
    },
    {
        message: 'Are there any test instructions?',
        name: 'testing'
    },
    {
        message: 'Please choose a license below.',
        name: 'license',
        type: 'list',
        choices: [
            {
                name: 'MIT License',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            },
            {
                name: 'Apache 2.0 License',
                value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            },
            {
                name: 'GNU GPL v3 License',
                value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            },
            {
                name: 'BSD 3-Clause License',
                value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            },
            {
                name: 'Mozilla Public License 2.0',
                value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            }
        ]
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (error) => {
        if (error) {
            console.log('Uh oh! Something went wrong', error);
        } else {
            console.log('File Created!\n-------');
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    const menuObj = await inquirer.prompt({
        message: 'Please select an option below',
        name: 'menuChoice',
        type: 'list',
        choices: ['Create a Markdown File', 'Exit']
    });

    switch (menuObj.menuChoice) {
        case 'Create a Markdown File':
            const content = generateMarkdown(data);
            writeToFile('README.md', data);
            break;
        default:
            figlet('Thanks for visiting!', (err, rendered) => {
                console.log(rendered)
            }

            )
    };
}

// Function call to initialize app
init();
