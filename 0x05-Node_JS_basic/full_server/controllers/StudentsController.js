import readDatabase from '../utils';

const VALID_MAJOR = ['CS', 'SWE'];
const path = process.argv.length > 2 ? process.argv[2] : null;

class StudentsController {
  static getAllStudents(request, response) {
    const output = ['This is the list of our students'];

    readDatabase(path)
      .then((result) => {
        Object.entries(result).forEach(([key, value]) => {
          output.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        });
        const allStudents = output.join('\n');
        response.status(200).send(allStudents);
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!VALID_MAJOR.includes(major)) {
      response
        .status(500)
        .send('Major parameter must be CS or SWE');
      return;
    }
    const output = [];
    readDatabase(path)
      .then((result) => {
        if (Object.keys(result).includes(major)) {
          output.push(`List: ${result[major].join(', ')}`);
          response
            .status(200)
            .send(output.join('\n'));
        }
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : 'Cannot load the database');
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
