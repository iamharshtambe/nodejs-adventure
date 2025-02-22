console.log('additionModule has been executed');

function calculateSum(x, y) {
   const result = x + y;
   console.log(result);
}

const author = 'Harsh Tambe';

module.exports = { calculateSum, author };
