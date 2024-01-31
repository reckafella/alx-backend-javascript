const assert = require('assert');
const calculateNumber = require('./1-calcul');

// test addition
describe('CalculateNumber: ADD `a` TO `b`', () => {
  it('should add two whole numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 4, 1), 5);
  });

  it('should add a whole number and floating point number', () => {
    assert.strictEqual(calculateNumber('SUM', 4, 1.0), 5);
  });

  it('should add two floating point numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 4.2, 1.0), 5);
  });

  it('should add two floating point numbers rounded down', () => {
    assert.strictEqual(calculateNumber('SUM', 4.25, 1.4), 5);
  });

  it('should add two floating point numbers rounded up', () => {
    assert.strictEqual(calculateNumber('SUM', 4.7, 1.8), 7);
  });

  it('should add two floating point numbers, one rounded up, another down', () => {
    assert.strictEqual(calculateNumber('SUM', 4.7, 3.4), 8);
  });

  it('should add two strings', () => {
    assert.strictEqual(calculateNumber('SUM', 'dr', 'xc'), NaN);
  });

  it('should add a number and a string', () => {
    assert.strictEqual(calculateNumber('SUM', 20.5, 'xc'), NaN);
  });

  it('should add a number and a string representation of a number', () => {
    assert.strictEqual(calculateNumber('SUM', 20.5, '20.5'), 42);
  });

  it('should add two number passed as strings', () => {
    assert.strictEqual(calculateNumber('SUM', '20.5', '0.025'), 21);
  });

  it('should add two numbers with trailing 9`s', () => {
    assert.strictEqual(calculateNumber('SUM', 20.5999999, 0.4999), 21);
  });

  it('should add two hexadecimals', () => {
    assert.strictEqual(calculateNumber('SUM', '0xfff', '0xfff'), 8190);
  });
});

// test subtraction
describe('CalculateNumber: SUBTRACT b FROM a', () => {
  it('should subtract two whole numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4, 1), 3);
  });

  it('should SUBTRACT a whole number and floating point number', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4, 1.0), 3);
  });

  it('should SUBTRACT two floating point numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.2, 1.0), 3);
  });

  it('should SUBTRACT two floating point numbers rounded down', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.25, 1.4), 3);
  });

  it('should SUBTRACT two floating point numbers rounded up', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.7, 1.8), 3);
  });

  it('should SUBTRACT two floating point numbers, one rounded up, another down', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.7, 3.4), 2);
  });

  it('should SUBTRACT two strings', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 'dr', 'xc'), NaN);
  });

  it('should SUBTRACT a number and a string', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 20.5, 'xc'), NaN);
  });

  it('should SUBTRACT a number and a string representation of a number', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 20.5, '20.5'), 0);
  });

  it('should SUBTRACT two number passed as strings', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', '20.5', '0.025'), 21);
  });

  it('should SUBTRACT two numbers with trailing 9`s', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 20.5999999, 0.54999), 20);
  });

  it('should SUBTRACT two hexadecimals', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0xfff, 0xfff), 0);
  });

  it('should SUBTRACT two negative numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -50, -5), -45);
  });

  it('should SUBTRACT b<0 from a>0', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 50, -5), 55);
  });

  it('should SUBTRACT b>0 from a<0', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -50, 55), -105);
  });
});

// test division
describe('CalculateNumber: DIVIDE a BY b', () => {
  it('should divide two whole numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
  });

  it('should divide a whole number by floating point number', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 2.5), 2);
  });

  it('should divide two floating point numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.2, 2.3), 2);
  });

  it('should divide two floating point numbers rounded down', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 9.25, 3.4), 3);
  });

  it('should divide two floating point numbers rounded up', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 11.7, 2.8), 4);
  });

  it('should divide two floating point numbers, one rounded up, another down', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 11.7, 3.4), 4);
  });

  it('should divide two strings', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 'dr', 'xc'), NaN);
  });

  it('should divide a number by a string', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 20.5, 'xc'), NaN);
  });

  it('should divide a number by a string representation of a number', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 20.5, '3.0'), 7);
  });

  it('should divide two number passed as strings', () => {
    assert.strictEqual(calculateNumber('DIVIDE', '20.5', '7.0'), 3);
  });

  it('should divide two numbers with trailing 9`s', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 20.5999999, 7.0999), 3);
  });

  it('should divide two hexadecimals', () => {
    assert.strictEqual(calculateNumber('DIVIDE', '0xfff', '0xfff'), 1);
  });

  it('should divide a by b=0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 20, 0), 'Error');
  });

  it('should divide a=0 by b', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 20), 0);
  });

  it('should divide a<0 by b', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1000, 20), -50);
  });

  it('should divide a by b<0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1000, -20), -50);
  });

  it('should divide a<0 by b<0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1000, -20), 50);
  });
});
