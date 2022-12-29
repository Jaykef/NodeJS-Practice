// Reading files using Nodejs - readFile()
const fs = require('fs');

fs.readFile('/Users/Jaykef/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// alternatively - readFileSync()
const fs = require('fs'); 

try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}


