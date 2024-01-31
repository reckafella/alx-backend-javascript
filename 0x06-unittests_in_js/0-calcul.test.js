// test calculateNumber() with mocha and Node assert library
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculator testing', () => {
  it('should add two whole numbers', () => {
    assert.strictEqual(calculateNumber(4, 1), 5);
  });

  it('should add a whole number and floating point number', () => {
    assert.strictEqual(calculateNumber(4, 1.0), 5);
  });

  it('should add two floating point numbers', () => {
    assert.strictEqual(calculateNumber(4.2, 1.0), 5);
  });

  it('should add two floating point numbers rounded down', () => {
    assert.strictEqual(calculateNumber(4.25, 1.4), 5);
  });

  it('should add two floating point numbers rounded up', () => {
    assert.strictEqual(calculateNumber(4.7, 1.8), 7);
  });

  it('should add two floating point numbers, one rounded up, another down', () => {
    assert.strictEqual(calculateNumber(4.7, 3.4), 8);
  });

  it('should add two strings', () => {
    assert.strictEqual(calculateNumber('dr', 'xc'), NaN);
  });

  it('should add a number and a string', () => {
    assert.strictEqual(calculateNumber(20.5, 'xc'), NaN);
  });

  it('should add a number and a string representation of a number', () => {
    assert.strictEqual(calculateNumber(20.5, '20.5'), 42);
  });

  it('should add two number passed as strings', () => {
    assert.strictEqual(calculateNumber('20.5', '0.025'), 21);
  });

  it('should add two numbers with trailing 9`s', () => {
    assert.strictEqual(calculateNumber(20.5999999, 0.4999), 21);
  });

  it('should add two hexadecimals', () => {
    assert.strictEqual(calculateNumber(0xfff, 0xfff), 8190);
  });
});
