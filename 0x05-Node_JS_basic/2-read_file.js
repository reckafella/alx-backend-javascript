const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = [];

    for (const line of lines) {
      students.push(line.trim().split(','));
    }

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

    // print total number of students
    console.log(`Number of students: ${students.length}`);

    // print number and list of students in each field
    Object.entries(fields).forEach(([key, value]) => {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    });
  } catch (_err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
