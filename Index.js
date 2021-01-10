const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const teamArray = [];

const getEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameInput',
            message: "Please enter the manager's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter the manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'idInput',
            message: "Please enter their ID: ",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter the ID of the employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailInput',
            message: "Please enter their email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter the email of the employee!');
                    return false;
                }
            }
        },
        {
            name: 'role',
            type: 'list',
            message: "What is the role of this team member?",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            name: 'office',
            type: 'input',
            message: "Please enter the manager's office number: ",
            when: (answers) => answers.role === "Manager"
        },
        {
            name: 'github',
            type: 'input',
            message: "Please input the engineer's gitHub username: ",
            when: (answers) => answers.role === "Engineer"
        },
        {
            name: 'school',
            type: 'input', 
            message: "Please input the name of the intern's school: ",
            when: (answers) => answers.role === "Intern"
        }
        
    ])
    .then(answers => {
        if ((answers) => answers.role === "Manager") {
            const manager = new Manager (answers.nameInput, answers.idInput, answers.emailInput, answers.office)
            teamArray.push(manager);
        }
        else if((answers) => answers.role === "Engineer") {
            const engineer = new Engineer (answers.nameInput, answers.idInput, answers.emailInput, answers.github)
            teamArray.push(engineer);
        }
        else {
            const intern = new Intern (answers.nameInput, answers.idInput, answers.emailInput, answers.school)
            teamArray.push(intern);
        }
        console.log(teamArray);
    })
}

getEmployee();