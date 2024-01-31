const chai = require('chai');
const calculateNumber = require('./1-calcul');

const expect = chai.expect;

describe('Calculate Number', () => {
  describe('CalculateNumber: ADD `a` TO `b`', () => {
    it('should add two whole numbers', () => {
      expect(calculateNumber('SUM', 4, 1)).to.equal(5);
    });

    it('should add a whole number and floating point number', () => {
      expect(calculateNumber('SUM', 4, 1.0)).to.equal(5);
    });

    it('should add two floating point numbers', () => {
      expect(calculateNumber('SUM', 4.2, 1.0)).to.equal(5);
    });

    it('should add two floating point numbers rounded down', () => {
      expect(calculateNumber('SUM', 4.25, 1.4)).to.equal(5);
    });

    it('should add two floating point numbers rounded up', () => {
      expect(calculateNumber('SUM', 4.7, 1.8)).to.equal(7);
    });

    it('should add two floating point numbers, one rounded up, another down', () => {
      expect(calculateNumber('SUM', 4.7, 3.4)).to.equal(8);
    });

    it('should add two strings', () => {
      expect(calculateNumber('SUM', 'dr', 'xc')).to.be.NaN;
    });

    it('should add a number and a string', () => {
      expect(calculateNumber('SUM', 20.5, 'xc')).to.be.NaN;
    });

    it('should add a number and a string representation of a number', () => {
      expect(calculateNumber('SUM', 20.5, '20.5')).to.equal(42);
    });

    it('should add two number passed as strings', () => {
      expect(calculateNumber('SUM', '20.5', '0.025')).to.equal(21);
    });

    it('should add two numbers with trailing 9`s', () => {
      expect(calculateNumber('SUM', 20.5999999, 0.4999)).to.equal(21);
    });

    it('should add two hexadecimals', () => {
      expect(calculateNumber('SUM', '0xfff', '0xfff')).to.equal(8190);
    });
  });

  // test subtraction
  describe('CalculateNumber: SUBTRACT b FROM a', () => {
    it('should subtract two whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 4, 1)).to.equal(3);
    });

    it('should SUBTRACT a whole number and floating point number', () => {
      expect(calculateNumber('SUBTRACT', 4, 1.0)).to.equal(3);
    });

    it('should SUBTRACT two floating point numbers', () => {
      expect(calculateNumber('SUBTRACT', 4.2, 1.0)).to.equal(3);
    });

    it('should SUBTRACT two floating point numbers rounded down', () => {
      expect(calculateNumber('SUBTRACT', 4.25, 1.4)).to.equal(3);
    });

    it('should SUBTRACT two floating point numbers rounded up', () => {
      expect(calculateNumber('SUBTRACT', 4.7, 1.8)).to.equal(3);
    });

    it('should SUBTRACT two floating point numbers, one rounded up, another down', () => {
      expect(calculateNumber('SUBTRACT', 4.7, 3.4)).to.equal(2);
    });

    it('should SUBTRACT two strings', () => {
      expect(calculateNumber('SUBTRACT', 'dr', 'xc')).to.be.NaN;
    });

    it('should SUBTRACT a number and a string', () => {
      expect(calculateNumber('SUBTRACT', 20.5, 'xc')).to.be.NaN;
    });

    it('should SUBTRACT a number and a string representation of a number', () => {
      expect(calculateNumber('SUBTRACT', 20.5, '20.5')).to.equal(0);
    });

    it('should SUBTRACT two number passed as strings', () => {
      expect(calculateNumber('SUBTRACT', '20.5', '0.025')).to.equal(21);
    });

    it('should SUBTRACT two numbers with trailing 9`s', () => {
      expect(calculateNumber('SUBTRACT', 20.5999999, 0.54999)).to.equal(20);
    });

    it('should SUBTRACT two hexadecimals', () => {
      expect(calculateNumber('SUBTRACT', 0xfff, 0xfff)).to.equal(0);
    });

    it('should SUBTRACT two negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -50, -5)).to.equal(-45);
    });

    it('should SUBTRACT b<0 from a>0', () => {
      expect(calculateNumber('SUBTRACT', 50, -5)).to.equal(55);
    });

    it('should SUBTRACT b>0 from a<0', () => {
      expect(calculateNumber('SUBTRACT', -50, 55)).to.equal(-105);
    });
  });

  describe('CalculateNumber: DIVIDE a BY b', () => {
    it('should divide two whole numbers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('should divide a whole number by floating point number', () => {
      expect(calculateNumber('DIVIDE', 6, 2.5)).to.equal(2);
    });

    it('should divide two floating point numbers', () => {
      expect(calculateNumber('DIVIDE', 4.2, 2.3)).to.equal(2);
    });

    it('should divide two floating point numbers rounded down', () => {
      expect(calculateNumber('DIVIDE', 9.25, 3.4)).to.equal(3);
    });

    it('should divide two floating point numbers rounded up', () => {
      expect(calculateNumber('DIVIDE', 11.7, 2.8)).to.equal(4);
    });

    it('should divide two floating point numbers, one rounded up, another down', () => {
      expect(calculateNumber('DIVIDE', 11.7, 3.4)).to.equal(4);
    });

    it('should divide two strings', () => {
      expect(calculateNumber('DIVIDE', 'dr', 'xc')).to.be.NaN;
    });

    it('should divide a number by a string', () => {
      expect(calculateNumber('DIVIDE', 20.5, 'xc')).to.be.NaN;
    });

    it('should divide a number by a string representation of a number', () => {
      expect(calculateNumber('DIVIDE', 20.5, '3.0')).to.equal(7);
    });

    it('should divide two number passed as strings', () => {
      expect(calculateNumber('DIVIDE', '20.5', '7.0')).to.equal(3);
    });

    it('should divide two numbers with trailing 9`s', () => {
      expect(calculateNumber('DIVIDE', 20.5999999, 7.0999)).to.equal(3);
    });

    it('should divide two hexadecimals', () => {
      expect(calculateNumber('DIVIDE', '0xfff', '0xfff')).to.equal(1);
    });

    it('should divide a by b=0', () => {
      expect(calculateNumber('DIVIDE', 20, 0)).to.equal('Error');
    });

    it('should divide a=0 by b', () => {
      expect(calculateNumber('DIVIDE', 0, 20)).to.equal(0);
    });

    it('should divide a<0 by b', () => {
      expect(calculateNumber('DIVIDE', -1000, 20)).to.equal(-50);
    });

    it('should divide a by b<0', () => {
      expect(calculateNumber('DIVIDE', 1000, -20)).to.equal(-50);
    });

    it('should divide a<0 by b<0', () => {
      expect(calculateNumber('DIVIDE', -1000, -20)).to.equal(50);
    });
  });
});

/* // test addition
describe('CalculateNumber: ADD `a` TO `b`', () => {
  it('should add two whole numbers', () => {
    expect(calculateNumber('SUM', 4, 1)).to.equal(5);
  });

  it('should add a whole number and floating point number', () => {
    expect(calculateNumber('SUM', 4, 1.0)).to.equal(5);
  });

  it('should add two floating point numbers', () => {
    expect(calculateNumber('SUM', 4.2, 1.0)).to.equal(5);
  });

  it('should add two floating point numbers rounded down', () => {
    expect(calculateNumber('SUM', 4.25, 1.4)).to.equal(5);
  });

  it('should add two floating point numbers rounded up', () => {
    expect(calculateNumber('SUM', 4.7, 1.8)).to.equal(7);
  });

  it('should add two floating point numbers, one rounded up, another down', () => {
    expect(calculateNumber('SUM', 4.7, 3.4)).to.equal(8);
  });

  it('should add two strings', () => {
    expect(calculateNumber('SUM', 'dr', 'xc')).to.be.NaN;
  });

  it('should add a number and a string', () => {
    expect(calculateNumber('SUM', 20.5, 'xc')).to.be.NaN;
  });

  it('should add a number and a string representation of a number', () => {
    expect(calculateNumber('SUM', 20.5, '20.5')).to.equal(42);
  });

  it('should add two number passed as strings', () => {
    expect(calculateNumber('SUM', '20.5', '0.025')).to.equal(21);
  });

  it('should add two numbers with trailing 9`s', () => {
    expect(calculateNumber('SUM', 20.5999999, 0.4999)).to.equal(21);
  });

  it('should add two hexadecimals', () => {
    expect(calculateNumber('SUM', '0xfff', '0xfff')).to.equal(8190);
  });
});

// test subtraction
describe('CalculateNumber: SUBTRACT b FROM a', () => {
  it('should subtract two whole numbers', () => {
    expect(calculateNumber('SUBTRACT', 4, 1)).to.equal(3);
  });

  it('should SUBTRACT a whole number and floating point number', () => {
    expect(calculateNumber('SUBTRACT', 4, 1.0)).to.equal(3);
  });

  it('should SUBTRACT two floating point numbers', () => {
    expect(calculateNumber('SUBTRACT', 4.2, 1.0)).to.equal(3);
  });

  it('should SUBTRACT two floating point numbers rounded down', () => {
    expect(calculateNumber('SUBTRACT', 4.25, 1.4)).to.equal(3);
  });

  it('should SUBTRACT two floating point numbers rounded up', () => {
    expect(calculateNumber('SUBTRACT', 4.7, 1.8)).to.equal(3);
  });

  it('should SUBTRACT two floating point numbers, one rounded up, another down', () => {
    expect(calculateNumber('SUBTRACT', 4.7, 3.4)).to.equal(2);
  });

  it('should SUBTRACT two strings', () => {
    expect(calculateNumber('SUBTRACT', 'dr', 'xc')).to.be.NaN;
  });

  it('should SUBTRACT a number and a string', () => {
    expect(calculateNumber('SUBTRACT', 20.5, 'xc')).to.be.NaN;
  });

  it('should SUBTRACT a number and a string representation of a number', () => {
    expect(calculateNumber('SUBTRACT', 20.5, '20.5')).to.equal(0);
  });

  it('should SUBTRACT two number passed as strings', () => {
    expect(calculateNumber('SUBTRACT', '20.5', '0.025')).to.equal(21);
  });

  it('should SUBTRACT two numbers with trailing 9`s', () => {
    expect(calculateNumber('SUBTRACT', 20.5999999, 0.54999)).to.equal(20);
  });

  it('should SUBTRACT two hexadecimals', () => {
    expect(calculateNumber('SUBTRACT', 0xfff, 0xfff)).to.equal(0);
  });

  it('should SUBTRACT two negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -50, -5)).to.equal(-45);
  });

  it('should SUBTRACT b<0 from a>0', () => {
    expect(calculateNumber('SUBTRACT', 50, -5)).to.equal(55);
  });

  it('should SUBTRACT b>0 from a<0', () => {
    expect(calculateNumber('SUBTRACT', -50, 55)).to.equal(-105);
  });
});

// test division
describe('CalculateNumber: DIVIDE a BY b', () => {
  it('should divide two whole numbers', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });

  it('should divide a whole number by floating point number', () => {
    expect(calculateNumber('DIVIDE', 6, 2.5)).to.equal(2);
  });

  it('should divide two floating point numbers', () => {
    expect(calculateNumber('DIVIDE', 4.2, 2.3)).to.equal(2);
  });

  it('should divide two floating point numbers rounded down', () => {
    expect(calculateNumber('DIVIDE', 9.25, 3.4)).to.equal(3);
  });

  it('should divide two floating point numbers rounded up', () => {
    expect(calculateNumber('DIVIDE', 11.7, 2.8)).to.equal(4);
  });

  it('should divide two floating point numbers, one rounded up, another down', () => {
    expect(calculateNumber('DIVIDE', 11.7, 3.4)).to.equal(4);
  });

  it('should divide two strings', () => {
    expect(calculateNumber('DIVIDE', 'dr', 'xc')).to.be.NaN;
  });

  it('should divide a number by a string', () => {
    expect(calculateNumber('DIVIDE', 20.5, 'xc')).to.be.NaN;
  });

  it('should divide a number by a string representation of a number', () => {
    expect(calculateNumber('DIVIDE', 20.5, '3.0')).to.equal(7);
  });

  it('should divide two number passed as strings', () => {
    expect(calculateNumber('DIVIDE', '20.5', '7.0')).to.equal(3);
  });

  it('should divide two numbers with trailing 9`s', () => {
    expect(calculateNumber('DIVIDE', 20.5999999, 7.0999)).to.equal(3);
  });

  it('should divide two hexadecimals', () => {
    expect(calculateNumber('DIVIDE', '0xfff', '0xfff')).to.equal(1);
  });

  it('should divide a by b=0', () => {
    expect(calculateNumber('DIVIDE', 20, 0)).to.equal('Error');
  });

  it('should divide a=0 by b', () => {
    expect(calculateNumber('DIVIDE', 0, 20)).to.equal(0);
  });

  it('should divide a<0 by b', () => {
    expect(calculateNumber('DIVIDE', -1000, 20)).to.equal(-50);
  });

  it('should divide a by b<0', () => {
    expect(calculateNumber('DIVIDE', 1000, -20)).to.equal(-50);
  });

  it('should divide a<0 by b<0', () => {
    expect(calculateNumber('DIVIDE', -1000, -20)).to.equal(50);
  });
}); */
