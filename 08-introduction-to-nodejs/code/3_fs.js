const fs = require('fs');

// Synchronous
const filecontent = fs.readFileSync('./readme.txt', 'utf-8');
fs.writeFileSync('./writeme.txt', filecontent, 'utf-8');
console.log('Sync file read/write');

// Asynchronous file read/write
fs.readFile('./readme.txt', 'utf-8', (err, data) => {
  fs.writeFile('./writemeasync.txt', data, 'utf-8', () => {
    console.log('Async file read/write');
  });
});
