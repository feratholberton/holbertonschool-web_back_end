export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  if (!Array.isArray(listOfStudents)) return [];

  const gradeList = Array.isArray(newGrades) ? newGrades : [];

  return listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = gradeList.find((grade) => grade.studentId === student.id);
      return { ...student, grade: gradeEntry ? gradeEntry.grade : 'N/A' };
    });
}
