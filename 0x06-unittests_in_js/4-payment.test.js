const { expect } = require('chai');
const sendPaymentRequestApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('Test Payment Request API', () => {
  it('should validate the usage of Utils.calculateNumber', () => {
    // create a stub for Utils.calculateNumber
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 100, 20).returns(10);

    // create a spy on console.log
    const consoleSpy = sinon.spy(console, 'log');

    // call the sendPaymentRequestApi function
    sendPaymentRequestApi(100, 20);

    // confirm the result of the stubbed function
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;

    // confirm the output of console.log
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;

    // restore the original methods after the test
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
