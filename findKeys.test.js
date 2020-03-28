/* eslint-env jest */
const findKeys = require('./findKeys');

describe('findKeys', () => {
  it('returns an array of keys corresponding to a given value', () => {
    const obj1 = {
      a: 9,
      b: 'hello',
      c: false,
      d: 'hello'
    };
    expect(findKeys(obj1, 'hello')).toEqual(['b', 'd']);
    expect(findKeys(obj1, 9)).toEqual(['a']);
    expect(findKeys(obj1, 42)).toEqual([]);
    expect(findKeys(obj1, false)).toEqual(['c']);
  });
});
