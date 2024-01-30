import fs from 'fs';

function groupStudentsByField(students, indexField, indexFirstName) {
  const fields = {};
  for (const student of students) {
    if (!fields[student[indexField]]) fields[student[indexField]] = [];
    fields[student[indexField]].push(student[indexFirstName]);
  }
  return fields;
}

async function readDatabase(path) {
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

        const indexField = headers.indexOf('field');
        const indexFirstName = headers.indexOf('firstname');

        const fields = groupStudentsByField(students, indexField, indexFirstName);
        resolve(fields);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
