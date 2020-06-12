// 3. A função mySum(arr) recebe um array arr e retorna a soma de seus elementos

const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
assert.equal(10, mySum([1, 2, 3, 4]), 'buuuh');
// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
assert.equal(0, mySum([1, -2, -3, 4]), 'nota 0!');