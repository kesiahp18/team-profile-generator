const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, managerOffice) {
        super(name, id, email);

        this.managerOffice = managerOffice;
    }
    getOffice() {
        return this.managerOffice;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager