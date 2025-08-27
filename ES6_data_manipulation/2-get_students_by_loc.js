export default function getStudentsByLocation(listOfStudents, city) {
  const studentsInCity = listOfStudents.filter(listOfStudents => listOfStudents.location == city)
  return studentsInCity
}