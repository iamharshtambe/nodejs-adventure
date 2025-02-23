const fs = require('fs');

// reading files
fs.readFile('./data/myInfo1.txt', 'utf-8', (err, data) => {
   if (err) {
      console.log(err);
   } else {
      console.log(data);
   }
});

// writing files
fs.writeFile('./data/myInfo2.txt', 'Harsh Vijay Tambe', 'utf-8', (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log('File is written successfully');
   }
});

// creating files
fs.writeFile(
   './data/myInfo3.txt',
   'JavaScript is Awesome!!!',
   'utf-8',
   (err) => {
      if (err) {
         console.log(err);
      } else {
         console.log('File is created successfully');
      }
   }
);

// creating and deleting directory (if already exists)
if (fs.existsSync('./testDir')) {
   fs.rmdir('./testDir', (err) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Folder is deleted successfuly');
      }
   });
} else {
   fs.mkdir('./testDir', (err) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Folder is created successfully');
      }
   });
}

// for deleting files use unlink()
