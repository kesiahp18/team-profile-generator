const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Rachel');

    expect(employee.name).toBe('Rachel');
})