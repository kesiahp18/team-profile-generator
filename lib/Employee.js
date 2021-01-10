const inquirer = require('inquirer');

class Employee {
    constructor(empName = '', empId = '', empEmail = '') {
        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail;
    }
}


    // getId() {
    //     inquirer
    //     .prompt({
    //         type: 'input',
    //         name: 'id',
    //         message: "Please enter the employee's ID: ",
    //         validate: idInput => {
    //             if (idInput) {
    //                 return true;
    //             }
    //             else {
    //                 console.log('Please enter the ID of the employee!');
    //                 return false;
    //             }
    //         }
    //     })
    // }

    // getEmail() {
    //     inquirer
    //     .prompt({
    //         type: 'input',
    //         name: 'email',
    //         message: "Please enter the employee's email: ",
    //         validate: emailInput => {
    //             if (emailInput) {
    //                 return true;
    //             }
    //             else {
    //                 console.log('Please enter the email of the employee!');
    //                 return false;
    //             }
    //         }
    //     })
    // }

            
module.exports = Employee;