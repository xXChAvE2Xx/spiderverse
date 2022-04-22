const Spiderman = require('./../app/spiderman');

describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        const andrewGarfield = new Spiderman('The Amazing Spider Man', 23, 'Andrew Garfield', 2, 'Sony');

        expect(andrewGarfield.name).toBe('The Amazing Spider Man');
        expect(andrewGarfield.age).toBe(23);
        expect(andrewGarfield.actor).toBe('Andrew Garfield');
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe('Sony')
    });
  })