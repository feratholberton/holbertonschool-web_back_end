const express = require('express');
const countStudents = require('./5-read_db');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  const header = 'This is the list of our students';
  const database = process.argv[2];

  if (!database) {
    res.status(200).send(`${header}\nCannot load the database`);
    return;
  }

  try {
    const summary = await countStudents(database);
    res.status(200).send(`${header}\n${summary}`);
  } catch (error) {
    res.status(200).send(`${header}\nCannot load the database`);
  }
});

app.listen(1245);

module.exports = app;
