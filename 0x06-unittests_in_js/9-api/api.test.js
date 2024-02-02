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

  it('should test responses when server receives GET /cart/45 request', (done) => {
    request.get(`${URL}cart/45`, (_error, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 45');
      done();
    });
  });

  it('should test responses when server receives GET /cart/wrong request', (done) => {
    request.get(`${URL}cart/wrong`, (_error, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.equal('ID must be numeric');
      done();
    });
  });

  it('should test responses when server receives GET /cart/2564488 request', (done) => {
    request.get(`${URL}cart/2564488`, (_error, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 2564488');
      done();
    });
  });

  it('should test responses when server receives GET /cart/bad request', (done) => {
    request.get(`${URL}cart/bad`, (_error, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.equal('ID must be numeric');
      done();
    });
  });
});
