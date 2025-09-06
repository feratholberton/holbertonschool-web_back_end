const http = require('http');
const readDb = require('./5-read_db');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    const header = 'This is the list of our students\n';
    readDb(process.argv[2])
      .then((body) => {
        res.statusCode = 200;
        res.end(header + body);
      })
      .catch(() => {
        res.statusCode = 200;
        res.end(`${header}Cannot load the database`);
      });
    return;
  }

  res.statusCode = 404;
  res.end('Not found');
});

app.listen(1245);
module.exports = app;
