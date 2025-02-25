const fs = require('fs');

const a = 100;

setImmediate(() => console.log('setImmediate'));

Promise.resolve().then(() => console.log('Promise'));

fs.readFile('./test.txt', 'utf8', () => {
   console.log('File reading CB');
});

setTimeout(() => {
   console.log('Timer expired');
}, 0);

process.nextTick(() => console.log('process.nextTick()'));

function printA() {
   console.log('a =', a);
}

printA();

console.log('Last line of the file');
