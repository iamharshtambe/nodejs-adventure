const nodejs = 'This is run using Node.js';
console.log(nodejs);

console.log(global); // global object in node.js

console.log(this); // this != global, it will log {}

console.log(globalThis); // common global object

console.log(global === globalThis); // true
