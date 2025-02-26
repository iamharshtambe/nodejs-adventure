const fs = require('fs');

const readStream = fs.createReadStream('./data/data1.txt', 'utf-8');
const writeStream = fs.createWriteStream('./data/data2.txt');

readStream.on('data', (chunk) => {
   console.log('-----NEW CHUNK-----');
   console.log(chunk);

   writeStream.write('\nNEW CHUNK\n');
   writeStream.write(chunk);
});

/*
shorter way: readStream.pipe(writeStream)
*/
