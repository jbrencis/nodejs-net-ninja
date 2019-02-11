const fs = require('fs');

/************************** unlink ************************** 
// ***************************************************************/

// to delete file
// fs.unlink('temp.txt', () => console.log('file have been deleted'));

/************************** mkdirSync ************************** 
// ***************************************************************/

// create directory synchronously
// fs.mkdirSync('stuff');

/************************** rmdirSync ************************** 
// ***************************************************************/

// delete directory synchronously
// fs.rmdirSync('stuff');

/************************** mkdir Async************************** 
// ***************************************************************/

// fs.mkdir('stuff', () => {
//   fs.readFile('./readMe.txt', 'utf-8', (err, data) => {
//     fs.writeFile('./stuff/writeMe.txt', data, () => {
//       console.log('success');
//     });
//   });
// });

/************************** rmdir Async************************** 
// ***************************************************************/

// to delere directory - remove file inside it first and only then remove directory
fs.unlink('./stuff/writeMe.txt', () => {
  fs.rmdir('stuff', () => console.log('directory removed successfully'));
});
