const fs = require('fs');
const http = require('http');

const path = process.argv.length > 2 ? process.argv[2] : '';
const host = '0.0.0.0';
const port = 1245;

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data.trim().split('\n');
        const students = lines.map((line) => line.trim().split(','));

        const headers = students[0];
        students.shift();

        const indexFirstName = headers.indexOf('firstname');
        const indexField = headers.indexOf('field');

        // object to hold the list of students' first names, grouped by field
        const fields = {};
        for (const student of students) {
          if (!fields[student[indexField]]) fields[student[indexField]] = [];
          fields[student[indexField]].push(student[indexFirstName]);
        }

        const responseMessage = ['This is the list of our students'];
        responseMessage.push(`Number of students: ${students.length}`);

        // print number and list of students in each field
        Object.entries(fields).forEach(([key, value]) => {
          responseMessage.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        });

        resolve(responseMessage.join('\n'));
      }
    });
  });
}

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Holberton School!');
  }
  if (request.url === '/students') {
    countStudents(path).then((responseMessage) => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Content-Length', responseMessage.length);
      response.write(Buffer.from(responseMessage));
    })
      .catch((_error) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Content-Length', _error.message.length);
        response.write(Buffer.from(_error.message));
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
