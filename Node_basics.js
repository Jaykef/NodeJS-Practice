// Reading files using Nodejs - readFile()
const fs = require('fs');

fs.readFile('/Users/Jaykef/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


