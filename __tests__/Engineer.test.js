const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Grace', 7707, 'grace@gmail.com', 'gracehub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})