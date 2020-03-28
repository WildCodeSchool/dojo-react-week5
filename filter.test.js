/* eslint-env jest */
const filter = require('./filter');

describe('filter', () => {
  it('filters the element thanks to the funtion param', () => {
    expect(filter([1, 2, 3], e => e <= 2)).toEqual([1, 2, 3].filter(e => e <= 2));
    expect(filter([{ price: 18 }, { price: 156 }, { price: 78 }], e => e.price > 150))
      .toEqual([{ price: 18 }, { price: 156 }, { price: 78 }].filter(e => e.price > 150));
  });

  it('should use a for loop (and standard style)', () => {
    expect(filter.toString().split('{')[1].indexOf('filter') === -1).toEqual(true);
    expect(filter.toString().split('{')[1].indexOf('for (') !== -1).toEqual(true);
  });
});
