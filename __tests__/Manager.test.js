const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const newManager = new Manager('Gwen', 270, 'gwen@gmail.com', 48)

    expect(newManager.empName).toBe('Gwen');
    expect(newManager.empId).toBe(270);
    expect(newManager.empEmail).toBe('gwen@gmail.com');
    expect(newManager.managerOffice).toBe(48);
})