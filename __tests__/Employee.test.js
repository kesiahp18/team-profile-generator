const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Rachel', 4521, 'rachel@gmail');

    expect(employee.name).toBe('Rachel');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})