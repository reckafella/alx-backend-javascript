const { expect } = require('chai');
const request = require('request');

describe('Basic integration testing', () => {
  const URL = 'http://localhost:7865/'

  it('should test responses when server receives GET / request', (done) => {
    request.get(URL, (_error, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
