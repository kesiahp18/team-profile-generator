class Employee {
    constructor(empName = '', empId = '', empEmail = '') {
        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail;
    }
    getName() {
        return this.empName;
    }
    getId() {
        return this.empId;
    }
    getEmail() {
        return this.empEmail;
    }
}
            
module.exports = Employee;