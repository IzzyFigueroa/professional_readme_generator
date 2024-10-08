
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';
import figlet from 'figlet';

export const questions = [
    {
        message: 'Please enter the title of your README?',
        name: 'title'
    },
    {
        message: 'What is your Github username?',
        name: 'github'
    },
    {
        message: 'Please provide your email address',
        name: 'email'
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
                value: 'MIT'
            },
            {
                name: 'Apache 2.0 License',
                value: 'Apache 2.0'
            },
            {
                name: 'GNU GPL v3 License',
                value: 'GPLv3'
            },
            {
                name: 'BSD 3-Clause License',
                value: 'BSD 3-Clause'
            }
        ]
    }
];


// TODO: Create a function to write README file
export function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
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
            generateMarkdown();
            break;
        default:
            figlet('Thanks for visiting!', (err, rendered) => {
                if (err) {
                    console.error('Error', err);
                    return;
                }
                console.log(rendered)
            }

            )
    };
}

// Function call to initialize app
init();

