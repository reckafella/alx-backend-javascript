const getPaymentTokenFromApi = (success) => {
  if (typeof success === 'boolean' && success === true) {
    return new Promise((resolve, reject) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
};

module.exports = getPaymentTokenFromApi;
