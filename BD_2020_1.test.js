/* eslint-env jest */
const battleDevEx1 = require('./BD_2020_1');

describe('battleDevEx1', () => {
  it('return the expected output according to the exemple given in the instructions', () => {
    const inputExemple = [
      6,
      'red',
      'yellow',
      'blue',
      'red',
      'yellow',
      'red'
    ];

    expect(battleDevEx1(inputExemple)).toEqual('red yellow');
  });

  it('works with another exemple', () => {
    const inputExemple = [
      9,
      'red',
      'red',
      'blue',
      'yellow',
      'yellow',
      'red',
      'blue',
      'blue',
      'blue'
    ];

    expect(battleDevEx1(inputExemple)).toEqual('blue red');
  });
});
