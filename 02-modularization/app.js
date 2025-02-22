require('./testModule.js');
const { calculateSum, author } = require('./additionModule.js');

calculateSum(15, 24);
console.log('Author:', author);

console.log('This is app.js file');
