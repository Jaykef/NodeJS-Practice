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
  const data = fs.readFileSync('/Users/jaykef/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

// read promised-based files - fsPromises.readFile()
const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('/Users/jaykef/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();

// writing files - writeFile()
const fs = require('fs');

const content = 'Some content!';

fs.writeFile('/Users/jaykef/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});




