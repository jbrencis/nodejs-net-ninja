const fs = require('fs');

// const readme = fs.readFileSync('readMe.txt', 'utf-8');
// console.log(readme);
// will create a file `writeMe.txt`
// fs.writeFileSync('writeMe.txt', readme);

// async
// fs.readFile('readMe.txt', 'utf-8', (err, data) => console.log(data));

fs.readFile('readMe.txt', 'utf-8', (err, data) =>
  fs.writeFile('writeMe.txt', data, err => {
    if (err) throw err;
    console.log('done!');
  })
);
