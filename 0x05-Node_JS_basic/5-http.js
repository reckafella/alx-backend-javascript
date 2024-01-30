const fs = require('fs');
const http = require('http');

const path = process.argv.length > 2 ? process.argv[2] : null;
const host = '0.0.0.0';
const port = 1245;

async function countStudents(path) {
  return new Promise((resolve, reject) => {
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

        const indexFirstName = headers.indexOf('firstname');
        const indexField = headers.indexOf('field');

        // object to hold the list of students' first names, grouped by field
        const fields = {};
        for (const student of students) {
          if (!fields[student[indexField]]) fields[student[indexField]] = [];
          fields[student[indexField]].push(student[indexFirstName]);
        }

        const responseMessage = [];
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
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');

    const output = ['This is the list of our students'];
    countStudents(path)
      .then((responseMessage) => {
        output.push(responseMessage);
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
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
