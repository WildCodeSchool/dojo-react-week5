/* eslint-env jest */
const map = require('./map');

describe('map', () => {
  it('maps the element thanks to the funtion param', () => {
    const double = n => n * 2;
    expect(map([1, 2, 3], double)).toEqual([1, 2, 3].map(double));
    expect(map([6, 7, 4], double)).toEqual([6, 7, 4].map(double));
    expect(map([0], double)).toEqual([0]);
    expect(map([6.5, 7.3], Math.floor)).toEqual([6, 7]);
  });

  it('should use a for loop (and standard style)', () => {
    expect(map.toString().split('{')[1].indexOf('map') === -1).toEqual(true);
    expect(map.toString().split('{')[1].indexOf('for (') !== -1).toEqual(true);
  });
});
