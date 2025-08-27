export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((total, student) => total + student.id, 0);
}