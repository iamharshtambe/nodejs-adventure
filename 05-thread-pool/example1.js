const crypto = require('crypto');

// within the size of thread poool
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
   console.log('1 - cryptoPBKDF2 done');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
   console.log('2 - cryptoPBKDF2 done');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
   console.log('3 - cryptoPBKDF2 done');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
   console.log('4 - cryptoPBKDF2 done');
});
