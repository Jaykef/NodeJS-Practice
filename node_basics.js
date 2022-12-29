// 1. Reading files using Nodejs - readFile()
const fs = require('fs');

fs.readFile('/Users/jaykef/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// 2. alternatively - readFileSync()
const fs = require('fs'); 

try {
  const data = fs.readFileSync('/Users/jaykef/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

// 3. read promised-based files - fsPromises.readFile()
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

// 4. writing files - writeFile()
const fs = require('fs');

const content = 'Some content!';

fs.writeFile('/Users/jaykef/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

// 5. writing files synchronously - writeFileSync()
const fs = require('fs');

const content = 'Some content!';

try {
  fs.writeFileSync('/Users/jaykef/test.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}

// 6. appending content to a file - appendFile()
const fs = require('fs');

const content = 'Some content!';

fs.appendFile('file.log', content, err => {
  if (err) {
    console.error(err);
  }
  // done!
});

// 7. append with promises - fsPromises.appendFile()
const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.appendFile('/Users/jaykef/test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();

// 8. create a new folder - mkdirSync()
const fs = require('fs');

const folderName = '/Users/jaykef/test';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

// 9. read content of a file - readdirSync()
const fs = require('fs');

const folderPath = '/Users/jaykef';

fs.readdirSync(folderPath);








