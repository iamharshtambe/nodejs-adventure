const fs = require('fs');

// reading files
fs.readFile('./data/myInfo.txt', 'utf-8', (err, data) => {
   if (err) {
      console.log(err);
   } else {
      console.log(data);
   }
});
