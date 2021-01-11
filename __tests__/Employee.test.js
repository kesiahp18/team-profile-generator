const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Rachel', 4521, 'rachel@gmail');

    expect(employee.empName).toBe('Rachel');
    expect(employee.empId).toEqual(4521);
    expect(employee.empEmail).toEqual('rachel@gmail');
})