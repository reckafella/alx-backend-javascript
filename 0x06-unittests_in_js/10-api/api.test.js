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

  it('should test /available_payments route', (done) => {
    const expected_object = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }

    request.get(`${URL}available_payments`, {json: true}, (_error, response, body) => {
      if (_error) return done(_error);

      expect(response.statusCode).to.equal(200);
      expect(body.payment_methods).to.be.an('object');
      expect(body.payment_methods.credit_cards).to.equal(true);
      expect(body.payment_methods.paypal).to.equal(false);
      expect(body).to.deep.equal(expected_object);
      done();
    });
  });

  it('should test POST requests to /login with username provided', (done) => {
    request.post(
      {
        url: `${URL}login`,
        json: true,
        body: {userName: 'Betty'}
      }, (_error, response, body) => {
        if (_error) return done(_error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
  });

  it('should test POST requests to /login with no username provided', (done) => {
    request.post({ url: `${URL}login`, json: true }, (_error, response, body) => {
      if (_error) return done(_error);

      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome undefined');
      done();
    });
  });
});
