const express = require('express');

const app = express();
const port = 1245;

app.get('/', (_request, _response) => _response.send('Hello Holberton School!'));

app.listen(port, () => process.stdout.write(`Server listening on port ${port}`));

module.exports = app;
