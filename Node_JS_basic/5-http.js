const { createServer } = require('http');
const countStudents = require('./2-read_file');

const hostname = 'localhost';
const port = 1245;

const app = createServer((req, res) => {
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const students = countStudents(process.argv[2]);
    res.end(students);
  }
});

app.listen(port, hostname);

module.exports = app;
