const inquirer = require('inquirer');

class Employee {
    constructor(empName = '', empId = '', empEmail = '') {
        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail;
    }
}
            
module.exports = Employee;