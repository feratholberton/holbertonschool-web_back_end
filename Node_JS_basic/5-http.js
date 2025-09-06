const { createServer } = require('http');
const countStudents = require('./2-read_file');

const hostname = 'localhost';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    const students = countStudents(process.argv[2]);
    res.end(students);
  }
});

app.listen(port, hostname);

module.exports = app;
