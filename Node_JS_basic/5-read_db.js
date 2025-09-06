const fsp = require('fs/promises');

async function countStudents(path) {
  try {
    const data = await fsp.readFile(path, 'utf8');

    const lines = data.split('\n').filter((l) => l.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(',').map((s) => s.trim()));

    const total = students.length;

    const byField = new Map();
    for (const [firstName, , , field] of students) {
      if (!byField.has(field)) byField.set(field, []);
      byField.get(field).push(firstName);
    }

    const parts = [`Number of students: ${total}`];
    for (const [field, names] of byField) {
      parts.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    return parts.join('\n');
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
