const { expect } = require('chai');
const sendPaymentRequestApi = require('./4-payment');
const sinon = require('sinon');

describe('Test Payment Request API', () => {
  let consoleSpy = null;

  // runs before each test
  beforeEach(() => {
    // create a spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  // runs after each test
  afterEach(() => {
    // restore the original method after each test
    consoleSpy.restore();
  });

  it('should validate that the total is 120', () => {
    // call the sendPaymentRequestApi function
    sendPaymentRequestApi(100, 20);

    // confirm the output of console.log
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should validate that the total is 20', () => {
    // call the sendPaymentRequestApi function
    sendPaymentRequestApi(10, 10);

    // confirm the output of console.log
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
