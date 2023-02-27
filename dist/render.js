const fs = require('fs');

function writeToFile(fileName, data) {
  const newFile =  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Commit Logged') );
  return newFile;
}
