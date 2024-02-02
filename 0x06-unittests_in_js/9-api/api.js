const express = require('express');

const app = express();

const PORT = 7865;

app.get('/', (request, response) => response.send('Welcome to the payment system'));

app.get('/cart/:id', (request, response) => {
  const id = request.params.id;
  if (!isNaN(id)) {
    const numericId = parseInt(id, 10);
    response.send(`Payment methods for cart ${numericId}`);
  } else {
    response.status(404).send('ID must be numeric');
  }
});

app.listen(PORT, () => console.log('API available on localhost port 7865'));

module.exports = app;
