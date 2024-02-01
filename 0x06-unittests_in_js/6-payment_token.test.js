const getPaymentTokenFromApi = require('./6-payment_token');
const { expect } = require('chai');

describe('Test getPaymentTokenFromApi', () => {
  it('should test getPaymentTokenFromAPI(true)', (done) => {
    getPaymentTokenFromApi(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
