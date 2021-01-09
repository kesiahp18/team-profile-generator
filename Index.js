const inquirer = require('inquirer');
const fs = require('fs');

const inputEmployee = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter the name of the employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID: ",
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
            name: 'email',
            message: "Please enter the employee's email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter the email of the employee!');
                    return false;
                }
            }
        }
    ])
    
}
inputEmployee()
.then(answers => console.log(answers))
