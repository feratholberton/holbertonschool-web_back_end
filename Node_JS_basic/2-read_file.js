const fileSystem = require('fs');

function countStudents(path) {
  try {
    const data = fileSystem.readFileSync(path, 'utf-8');
    const totalLines = data.split('\n');
    const usefulLines = totalLines.filter((line) => line.trim() !== '');
    const studentsLines = usefulLines.splice(1);

    const students = [];
    studentsLines.forEach((student) => students.push(student.split(',')));

    console.log(`Number of students: ${students.length}`);

    const fields = [];
    students.forEach((field) => fields.push(field[3]));
    const uniqueFields = (new Set(fields));

    uniqueFields.forEach((value) => {
      const studentInField = [];
      students.forEach((student) => {
        if (student[3] == value) {
          studentInField.push(student[0]);
        }
      });

      console.log(`Number of students in ${value}: ${studentInField.length}. List: ${studentInField.join(', ')}`);
    });
  } catch(error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
