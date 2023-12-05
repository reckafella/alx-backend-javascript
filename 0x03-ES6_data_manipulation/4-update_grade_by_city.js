export default function updateStudentGradeByCity(studentsArr, city, newGrades) {
  return studentsArr.filter((student) => student.location === city)
    .map((student) => {
      const matchingGrades = newGrades.filter((grade) => grade.studentId === student.id);

      const grade = matchingGrades.length > 0 ? matchingGrades[0].grade : 'N/A';

      return { ...student, grade };
    });
}
