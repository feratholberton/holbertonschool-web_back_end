// process.stdout.write('Xaraxa');
console.log('Welcome to Holberton School, what is your name?')

process.stdin.on('data', (data) => {
  const input = data.toString();
  console.log(`Your name is: ${input}`);
  //process.exit();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});