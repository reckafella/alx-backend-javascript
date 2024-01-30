const fs = require('fs');

function groupStudentsByField(students, indexField, indexFirstName) {
  const fields = {};
  for (const student of students) {
    if (!fields[student[indexField]]) fields[student[indexField]] = [];
    fields[student[indexField]].push(student[indexFirstName]);
  }
  return fields;
}

function printStudentSummary(totalStudents, fields) {
  // print total number of students
  console.log(`Number of students: ${totalStudents}`);

  // print number and list of students in each field
  Object.entries(fields).forEach(([key, value]) => {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  });
}

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const lines = data.trim().split('\n');
  const students = lines.map((line) => line.trim().split(','));

  const headers = students[0];
  students.shift();

  const indexFirstName = headers.indexOf('firstname');
  const indexField = headers.indexOf('field');

  // object to hold the list of students' first names, grouped by field
  const fields = groupStudentsByField(students, indexField, indexFirstName);

  printStudentSummary(students.length, fields);
}

module.exports = countStudents;
