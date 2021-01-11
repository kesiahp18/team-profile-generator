const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const newEngineer = new Engineer('Grace', 7707, 'grace@gmail.com', 'gracehub')

    expect(newEngineer.empName).toBe('Grace');
    expect(newEngineer.empId).toBe(7707);
    expect(newEngineer.empEmail).toBe('grace@gmail.com');
    expect(newEngineer.github).toBe('gracehub');
})