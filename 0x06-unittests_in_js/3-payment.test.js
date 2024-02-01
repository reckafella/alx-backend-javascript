const { expect } = require('chai');
const sendPaymentRequestApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('Test Payment Request API', () => {
  it('should validate the usage of Utils.calculateNumber', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    calculateNumberSpy.restore();
  });
});
