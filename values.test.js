/* eslint-env jest */
const values = require('./values');

describe('values', () => {
  it('returns an array of the object\'s property values', () => {
    const obj1 = {
      a: 'hello',
      b: 24,
      c: false
    };
    expect(values(obj1)).toEqual(Object.values(obj1));
  });

  it('should use a for loop (and standard style)', () => {
    expect(values.toString().split('{')[1].indexOf('filter') === -1).toEqual(true);
    expect(values.toString().split('{')[1].indexOf('for (') !== -1).toEqual(true);
  });
});
