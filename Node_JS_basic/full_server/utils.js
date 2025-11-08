import { promises as fs } from 'fs';

export default function readDatabase(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      const students = lines.slice(1).map((line) => line.split(',').map((part) => part.trim()));
      const fields = {};

      students.forEach((student) => {
        if (student.length < 4) {
          return;
        }
        const [firstname, , , field] = student;
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      return fields;
    });
}
