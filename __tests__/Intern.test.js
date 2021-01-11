const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const newIntern = new Intern('Gabe', 537, 'gabe@gmail.com', 'University')

    expect(newIntern.empName).toBe('Gabe');
    expect(newIntern.empId).toBe(537);
    expect(newIntern.empEmail).toBe('gabe@gmail.com');
    expect(newIntern.school).toBe('University');
})