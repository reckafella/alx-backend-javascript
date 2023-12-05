export default function getListStudents() {
  const studentsArr = [];

  // populate array with the objects
  studentsArr.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  studentsArr.push({ id: 2, firstName: 'James', location: 'Columbia' });
  studentsArr.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });

  return studentsArr;
}
