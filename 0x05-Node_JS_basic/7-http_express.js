const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;
const path = process.argv.length > 2 ? process.argv[2] : null;

const countStudents = (path) => new Promise((resolve, reject) => {
  if (path === null) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data.trim().split('\n');
      const students = lines.map((line) => line.trim().split(','));

      const headers = students[0];
      students.shift();

      const indexField = headers.indexOf('field');
      const indexFirstName = headers.indexOf('firstname');

      const fields = {};

      for (const student of students) {
        if (!fields[student[indexField]]) fields[student[indexField]] = [];
        fields[student[indexField]].push(student[indexFirstName]);
      }

      const responseMessage = [];
      responseMessage.push(`Number of students: ${students.length}`);

      Object.entries(fields).forEach(([key, value]) => {
        responseMessage.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      });
      resolve(responseMessage.join('\n'));
    }
  });
});

// When the URL path is /, it should display Hello Holberton School! in the page body
app.get('/', (_request, _response) => _response.send('Hello Holberton School!'));

// when the URL path is /students, it it should display This is the list of our students
// followed by the same content as the file 3-read_file_async.js (with and without the database)
// - the name of the database must be passed as argument of the file
app.get('/students', (_request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  const output = ['This is the list of our students'];
  countStudents(path)
    .then((result) => {
      output.push(result);
      const responseText = output.join('\n');

      response.setHeader('Content-Length', responseText.length);
      response.write(Buffer.from(responseText));
    })
    .catch((error) => {
      output.push(error instanceof Error ? error.message : error.toString());
      const responseText = output.join('\n');

      response.setHeader('Content-Length', responseText.length);
      response.write(Buffer.from(responseText));
    });
});

app.listen(port, () => process.stdout.write(`Server listening on port ${port}`));

module.exports = app;
