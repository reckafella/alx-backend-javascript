const express = require('express');
// const parser = require('body-parser')

const app = express();

const PORT = 7865;

app.use(express.json());
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

app.get('/available_payments', (request, response) => {
  const data = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  response.status(200).json(data)
});

app.post('/login', (request, response) => {
  let username = '';
  if (request.body !== undefined) {
    username = request.body.userName;
  }
  response.send(`Welcome ${username}`);
});

app.listen(PORT, () => console.log('API available on localhost port 7865'));

module.exports = app;
