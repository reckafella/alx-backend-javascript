const Utils = require('./utils');

const sendPaymentRequestApi = (totalAmount, totalShipping) => {
  console.log(`The total is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
}

module.exports = sendPaymentRequestApi;
